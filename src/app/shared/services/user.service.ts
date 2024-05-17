import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/users';

  userRefs: AngularFireList<User>;
  constructor(private db: AngularFireDatabase) {
    this.userRefs = db.list(this.dbPath);
   }

   getAll(): AngularFireList<User>{
    return this.userRefs;
   }

   create(user: User): any{
    return this.userRefs.push(user);
   }

   update(id: string, data: any): Promise<void> {
    return this.userRefs.update(id, data);
   }

   delete(id: string): Promise<void> {
    return this.userRefs.remove();
   }
}
