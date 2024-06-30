import { Component } from '@angular/core';
import { ClientTableComponent } from './shared/client-table/client-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    ClientTableComponent
  ],
})
export class AppComponent {
  title = 'initium-testovoe';
}
