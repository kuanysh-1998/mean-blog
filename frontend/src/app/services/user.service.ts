import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUser, IUserLogin, IUserRegister, User } from '../models/models';
import { BASE_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/urls';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorge(),
  );
  public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(user: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, user).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        },
        error: console.log,
      }),
    );
  }

  register(user: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, user).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          alert('Register Successful');
        },
        error: (errorResoinse) => {
          alert(`${errorResoinse.error}, Register Failed`);
        },
      }),
    );
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem('User');
    window.location.reload();
  }

  verifyEmail(userId: string, token: string): Observable<User> {
    return this.http
      .get<User>(BASE_URL + `/api/auth/${userId}/verify/${token}`)
      .pipe(
        tap({
          next: (user) => {
            this.setUserToLocalStorage(user);
            alert('Email Verified!');
          },
          error: (errorResponse) => {
            console.log(errorResponse.error);
          },
        }),
      );
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }

  private getUserFromLocalStorge(): User {
    const userJson = localStorage.getItem('User');

    if (userJson) return JSON.parse(userJson) as User;

    return new User();
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(BASE_URL + `/profile/:${id}`);
  }
}
