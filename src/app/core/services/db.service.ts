import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, Firestore, DocumentData  } from 'firebase/firestore/lite';
import { db } from 'src/environments/environment';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  async getUsers() {
    const userCollection = collection(db, "Users");
    const userSnapshot = await getDocs(userCollection);
    const userList = await userSnapshot.docs.map(doc => doc.data());
    //console.log(userList)
    return userList  as IUser[];
  }

  constructor() {
  }
}
