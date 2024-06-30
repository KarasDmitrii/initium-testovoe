import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { map } from 'rxjs/operators';


export interface IClientData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface IApiResponse {
  users: IClientData[]
}


const API_URL: string = 'https://test-data.directorix.cloud/task1';


@Injectable({
  providedIn: 'root'
})

export class ClientListService {

  constructor(
    private http: HttpClient
  ) { }
  
  public getClientList() {
    return this.http.get<IApiResponse>(API_URL).pipe(map((data:IApiResponse) => {
      return data.users;
    }))
  }
}
