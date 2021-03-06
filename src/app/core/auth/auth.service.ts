import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private UserService: UserService) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(
        API_URL + '/user/login',
        { userName, password },
        { observe: 'response'}
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.UserService.setToken(authToken);
        console.log(`User ${userName} autenticado com token ${authToken}`);
      }))
  }
}
