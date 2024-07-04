import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, from, map, of, switchMap, takeUntil, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginRequestError, LoginRequestSucess } from "../interfaces/login";
import { FirestoreService } from "./firestore.service";
import { IUser } from "../interfaces/user";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { selectCurrentUserStore, selectUserStoreList } from "src/store/selector/user.selector";
import { setCurrentUser } from "src/store/action/user.action";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  store = inject(Store<AppState>);
  users$ : Observable<IUser[]> = new Observable<IUser[]>();
  userStore$: Observable<IUser> = new Observable<IUser>();
  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  currentUser: IUser | null = null;

  user: IUser = {} as IUser;
  isAuth: boolean = false;
  constructor() {
    this.users$ = this.store.select(selectUserStoreList);
  }

  initCurrentUser() {
    console.log("init current user")
    this.user = {} as IUser;
  }
  parseJwt(token:string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  login(email: string, password: string): Observable<IUser | null> {
    this.users$ = this.store.select(selectUserStoreList);
    this.currentUser$ = this.store.select(selectCurrentUserStore);
    return this.users$.pipe(
      switchMap(users => {
        console.log("checking", email, password) ;

        if (this.user.email){
          return of(this.user);
        }

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          this.isAuth = true;
          this.store.dispatch(setCurrentUser({ user })); // Update current user in the store
          this.currentUserSubject.next(user); // Update currentUser$
          this.user = user; // Assign to this.user
          return of(user);
        } else {
          return of({} as IUser);
        }
      }),
      catchError((error: any) => {
        //console.error("Error:", error.message);
        return throwError(error);
      })
    );
  }
  
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}
