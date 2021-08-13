import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {
  private readonly apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}/users`)
  }
}
