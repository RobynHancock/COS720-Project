import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from './subject';
import { SUBJECTS } from './mock-subjects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private messageService:MessageService) { }

  getSubjects(): Observable<Subject[]> {
    const subjects = of(SUBJECTS);
    this.messageService.add('SubjectService: fetched subjects');
    return subjects;
  }

  getSubject(id: number):Observable<Subject> {
    const subject = SUBJECTS.find(s => s.id === id)!;
    this.messageService.add('SubjectService: fetched subject id=${id}');
    return of(subject);
  }
}
