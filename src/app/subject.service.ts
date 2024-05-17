import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Subject } from './models/subjects.model';
//import { Subject } from './subject';
//import { SUBJECTS } from './mock-subjects';
//import { MessageService } from './message.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private dbPath = '/Subject'; //path of realtime database

  subjectsRef: AngularFireList<Subject>; //Subject from subjects.model.ts
  
  constructor(private db: AngularFireDatabase) {
    this.subjectsRef = db.list(this.dbPath);
  }

  getAll() : AngularFireList<Subject> {
    return this.subjectsRef;
  }

  create(sub: Subject): any {
    return this.subjectsRef.push(sub);
  }

  update(key: string, value: any): Promise<void> {
    return this.subjectsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.subjectsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.subjectsRef.remove();
  }

  //constructor(private messageService:MessageService) { }

  /*getSubjects(): Observable<Subject[]> {
    const subjects = of(SUBJECTS);
    this.messageService.add('SubjectService: fetched subjects');
    return subjects;
  }

  getSubject(id: number):Observable<Subject> {
    const subject = SUBJECTS.find(s => s.id === id)!;
    this.messageService.add('SubjectService: fetched subject id=${id}');
    return of(subject);
  }*/
}
