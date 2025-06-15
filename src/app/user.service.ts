import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private url = "https://jsonplaceholder.typicode.com/users"

  constructor() { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}

  
