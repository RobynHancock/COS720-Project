import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { SubjectRegistration } from '../../models/subject-registration.model';
import { AuthService } from '../auth.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SubjectRegistrationService {
  //private dbPath = '/Student-Modules';
  private dbPath = '/users';

  srRef: AngularFireList<SubjectRegistration>;
  constructor(private db: AngularFireDatabase) {
    this.srRef = db.list(this.dbPath);
   }

   getAll(): AngularFireList<SubjectRegistration> {
    return this.srRef;
   }

   create(sr: SubjectRegistration): any {
    return this.srRef.push(sr);
   } 

   update(key: string, value: any): Promise<void> {
    return this.srRef.update(key, value);
   }

   delete(key: string): Promise<void> {
    return this.srRef.remove(key);
   }

   deleteAll(): Promise<void> {
    return this.srRef.remove();
   }
}
