import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EAuthPage } from '../models/refData';
import { Observable, catchError, of } from 'rxjs';
import { LoginRequestError } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  error: string | undefined;
  form: any;
  submitForm: boolean | undefined;
  serviceAuth: any;
  http: any;
  route: any;
  constructor() {}

  getPageAuth() {
    return of(EAuthPage.Login);
  }

  onSubmit() {
    this.error = "";
    if(this.form.valid) {
      this.submitForm = true;
      this.serviceAuth
        .login(this.form.value.email, this.form.value.password)
        .subscribe((data: any | LoginRequestError) => {
          if (data.error) {
            this.error = data.message;
          } else {
            this.route.navigateByUrl('/home');
          }
          console.log(data);
        });
    }
  }
  login(email: string, password: string) : Observable<LoginRequestError> {
    return this.http
      .post(`${this.route}/auth/login`, {
        email: email,
        password: password,
      })
      .pipe(catchError(this.errorRequest));
  }

register() {}

errorRequest(httpError : HttpErrorResponse): Observable<LoginRequestError> {
  return of({ ...httpError.error, error: true });
}

}