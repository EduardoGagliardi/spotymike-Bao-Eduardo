import { Injectable } from '@angular/core';
import { collection, getDocs, getFirestore, Firestore, DocumentData  } from 'firebase/firestore/lite';
import { db } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  static async getUsers(): Promise<DocumentData[]> {
    const userCollection = collection(db, "Users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
  }

  constructor() {
  }
}
