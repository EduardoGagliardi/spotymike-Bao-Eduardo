import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, catchError, from, of } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginRequestError, LoginRequestSucess } from "../interfaces/login";
import { FirestoreService } from "./firestore.service";
import { IUser } from "../interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  private http = inject(HttpClient);
  private firebase = inject(FirestoreService);
  private route = environment.url_api;
  users: IUser[] = [];
  currentUser: IUser;
  isAuth: boolean = false;
  constructor() {
    this.firebase.getAllUser().then((users) => {
      this.users = users.map((user) => user as IUser)
    });
    this.currentUser = {} as IUser;  
  }

  login(email: string, password: string) {
    this.isAuth = this.users.filter((user) => user.email == email && user.password == password).length > 0;
    if (this.isAuth) {
      localStorage.setItem("auth", "true");

      return from(this.firebase.getCurrentUser(email).then(user => {
        this.currentUser = user as IUser;
        return user;
      }));
    }
    localStorage.setItem("auth", "false");
    return this.errorRequest(new HttpErrorResponse({ error: { error: true, message: "email or password invalid" } }));
  }
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}
