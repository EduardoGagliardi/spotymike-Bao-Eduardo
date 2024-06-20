import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonRadioGroup,
  IonRadio
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { backspaceOutline, handLeft, idCard, leafOutline } from "ionicons/icons";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { FirestoreService } from "src/app/core/services/firestore.service";
import { IUser } from "src/app/core/interfaces/user";
// import { v4 as uuidv4 } from 'uuid';
// import * as bcrypt from 'bcrypt';
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonRadioGroup,
    IonRadio,
  ],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  isToggled : boolean;
  private fireBaseService = inject(FirestoreService);
 // private router = inject(Router);
  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.isToggled = false;
   // Initialize the form group with form controls
   this.form = this.fb.group({
    createArtistAccount: [this.isToggled],
    avatar: [''], 
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),]],
    birthdate: ['', Validators.required],
    sex: [''],
    phone: ['', [ Validators.min(1000000000), Validators.max(9999999999)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  async onSubmit() {
    if (this.form.valid) {
      const birthdate = new Date(this.form.value.birthdate);
      var dateNow = new Date();
      var age = dateNow.getFullYear() - birthdate.getFullYear();
      if (!this.form.value.createArtistAccount && age < 12) {
        const alert = await this.alertController.create({
          header: 'Age Restriction',
          message: 'You must be at least 12 years old to create an account',
          buttons: ['OK']
        });

        await alert.present();
        return;
      }else if(this.form.value.createArtistAccount && age < 16){
        const alert = await this.alertController.create({
          header: 'Age Restriction',
          message: 'You must be at least 16 years old to create an artist account',
          buttons: ['OK']
        });

        await alert.present();
        return;
      }
      try {
        // const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        //   this.form.value.email,
        //   this.form.value.password
        // );
        
        // const userId = uuidv4();
        const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const artistId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // const hashedPassword = await bcrypt.hash(this.form.value.password, 10);

        const user: IUser = {
          id: userId,
          id_artist : this.form.value.createArtistAccount ? artistId : '',
          email: this.form.value.email,
          firstname: this.form.value.firstName,
          lastname: this.form.value.lastName,
          dateBirth: this.form.value.birthdate,
          sexe: this.form.value.sex,
          tel: this.form.value.phone,
          password: this.form.value.password,
          active: 1,
          followers: 0,
          lastPlayed : [],
          songs: [],
          albums: [],
          playlist: [],
          followed: [],
          createdAt: dateNow, 
          updatedAt: dateNow,
        };
        const userCheck: IUser  = await this.fireBaseService.getAUser(user.email) as IUser;
        console.log(userCheck);
        if (userCheck) {
          const alert = await this.alertController.create({
            header: 'Registration Error',
            message: 'User already exists',
            buttons: ['OK']
          });

          await alert.present();
        }else{
          await this.fireBaseService.createUser(user);
          this.router.navigate(['/']);
        }
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Registration Error',
          message: 'Create erreur',
          buttons: ['OK']
        });

        await alert.present();
      }
      //this.router.navigate(["/"]);
    }
  }
  public notify() {
    this.isToggled = !this.isToggled;
  }
}
