import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  private dbPath = '/users';

  uRef: AngularFirestoreCollection<User>;
  constructor(private DB: AngularFirestore) { 
    this.uRef = DB.collection(this.dbPath);
  }

  create(user: User): any {
    return this.uRef.add({ ...user });
  }

  getAll(): AngularFirestoreCollection<User> {
    return this.uRef;
  }

  update(uid: string, data: any): Promise<void> {
    return this.uRef.doc(uid).update(data);
  }

  delete(uid: string): Promise<void> {
    return this.uRef.doc(uid).delete();
  }

  
}
