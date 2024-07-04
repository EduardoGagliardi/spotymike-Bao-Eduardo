import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PasswordLostComponent } from 'src/app/shared/modal/password-lost/password-lost.component';
import { __values } from 'tslib';
import { IUser } from 'src/app/core/interfaces/user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import {Observable } from 'rxjs';
import { loadUsers } from 'src/store/action/user.action';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItem,
    IonList,
    IonTitle,
    IonInput,
    IonHeader,
    IonButton,
    IonToolbar,
    IonContent,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  store = inject(Store<AppState>);
  users$ : Observable<IUser[]> = new Observable<IUser[]>();

  error = '';
  email =''
  submitForm = false;
  subscription: any = null;
  userList: IUser[] = [];
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  private serviceAuth = inject(AuthentificationService);

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor( private alertController: AlertController) {
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.store.dispatch(loadUsers());

    if(localStorage.getItem('jwt')){
      this.router.navigateByUrl('/home/home');
    }
  }

  generateJwt(email: string, id: string) {
    const HMACSHA256 = (key: string , message: string) => CryptoJS.HmacSHA256(message, key).toString(CryptoJS.enc.Hex);

    // The header typically consists of two parts: 
    // the type of the token, which is JWT, and the signing algorithm being used, 
    // such as HMAC SHA256 or RSA.
    const header = {
      "alg": "HS256",
      "typ": "JWT"
    }
    const encodedHeaders = btoa(JSON.stringify(header))


    // The second part of the token is the payload, which contains the claims.
    // Claims are statements about an entity (typically, the user) and 
    // additional data. There are three types of claims: 
    // registered, public, and private claims.
    const claims = {
        "email": email,
        "id": id
    }

    const encodedPlayload = btoa(JSON.stringify(claims))

    // create the signature part you have to take the encoded header, 
    // the encoded payload, a secret, the algorithm specified in the header, 
    // and sign that.
    const signature = HMACSHA256( "spotymike-bhn", `${encodedHeaders}.${encodedPlayload}`)
    const encodedSignature = btoa(signature)

    const jwt = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
    return jwt;
  }

  onSubmit() {
    this.error = '';
    
    if (this.form.valid) {
      this.submitForm = true;
      this.subscription = this.serviceAuth
        .login(this.form.value.email, this.form.value.password)
        .subscribe(async (data: any) => {
          console.log(data);
          if (localStorage.getItem('jwt')) {
            this.router.navigateByUrl('/home/home');
          }

          if (Object.keys(data).length === 0) {
            const alert = await this.alertController.create({
              header: 'Login refused',
              message: 'Password or email invalid',
              buttons: ['OK']
            });
            await alert.present();
            return;
          } else {
            // Add LocalStorage User
            localStorage.setItem('jwt', this.generateJwt(data.email, data.id));
            //console.log(this.parseJwt(this.generateJwt(data.email, data.id)));
            //localStorage.setItem('user', JSON.stringify({email: data.email, id: data.id}));
            this.router.navigateByUrl('/home/home');
          }
        });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  async onPasswordLostModal() {
    const modal = await this.modalCtl.create({
      component: PasswordLostComponent,
    });
    modal.present();
  }
  async onRegister() {
    this.router.navigateByUrl('/auth/register');
  }
}