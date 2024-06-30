import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReplaySubject } from 'rxjs';
import { ClientListService, IApiResponse, IClientData } from 'src/app/ClientService/client-list.service';


const clientListSubject = new ReplaySubject<IClientData[]>(1);


@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule, 
    MatSortModule, 
    MatCheckboxModule, 
    FormsModule
  ],
   providers: [
    ClientListService
  ]
})
export class ClientTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'surname', 'email', 'phone'];
  dataSource = new MatTableDataSource<IClientData>([]);
  selectedIndexs: number[] = []

  constructor(
    private clientListService: ClientListService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  someChecked(index: number, checked: boolean) {
    if (checked) {
      this.selectedIndexs.push(index)
    } else {
      this.selectedIndexs = this.selectedIndexs.filter((item) => item !== index)
      
    }
    console.log(this.selectedIndexs)
  }

  ngOnInit(): void {
    this.clientListService.getClientList()
    .subscribe((res) => clientListSubject.next(res))
    clientListSubject.subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data)})
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
