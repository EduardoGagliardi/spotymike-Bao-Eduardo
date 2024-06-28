import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, from, map, of, switchMap, throwError } from "rxjs";
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

  private http = inject(HttpClient);
  private firebase = inject(FirestoreService);
  private route = environment.url_api;
  user: IUser = {} as IUser;
  isAuth: boolean = false;
  constructor() {
   
    this.users$ = this.store.select(selectUserStoreList);
    
  }

  login(email: string, password: string): Observable<IUser | null> {
    console.log("Login attempt");
    this.users$ = this.store.select(selectUserStoreList);
    return this.users$.pipe(
      switchMap(users => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          this.isAuth = true;
          this.store.dispatch(setCurrentUser({ user })); // Update current user in the store
          this.currentUserSubject.next(user); // Update currentUser$
          this.user = user; // Assign to this.user
          console.log("Current user:", this.user);
          return of(user);
        } else {
          this.isAuth = false;
          this.currentUserSubject.next(null); // Update currentUser$ to null
          // If user is not found locally, make an HTTP request
          return this.http.post<IUser>(`${this.route}/login`, { email, password }).pipe(
            switchMap(response => {
              if (response && response.email) {
                this.isAuth = true;
                this.store.dispatch(setCurrentUser({ user: response })); // Update current user in the store
                this.currentUserSubject.next(response); // Update currentUser$
                this.user = response; // Assign to this.user
                return of(response);
              } else {
                return throwError(new HttpErrorResponse({ error: { error: true, message: "Email or password invalid" } }));
              }
            }),
            catchError((error: HttpErrorResponse) => {
              console.error("HTTP Error:", error.message);
              return throwError(error);
            })
          );
        }
      }),
      catchError((error: any) => {
        console.error("Error:", error.message);
        return throwError(error);
      })
    );
  }
  
  // async login(email: string, password: string) {
  //   //user = this.users.find((user) => user.email == email) as IUser;
  //   //this.isAuth = await bcrypt.compare(password, user.password);
    
  //   this.isAuth = this.users.filter((user) => user.email == email && user.password == password).length > 0;
  //   if (this.isAuth) {
  //     localStorage.setItem("auth", "true");

  //     return from(this.firebase.getAUser(email).then(user => {
  //       this.currentUser = user as IUser;
  //       return user;
  //     }));
  //   }
  //   localStorage.setItem("auth", "false");
  //   return this.errorRequest(new HttpErrorResponse({ error: { error: true, message: "email or password invalid" } }));
  // }
  register() {}

  errorRequest(httpError: HttpErrorResponse): Observable<LoginRequestError> {
    return of({ ...httpError.error, error: true });
  }
}
