import { Component } from '@angular/core';
import { Subject } from '../../models/subjects.model';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.css'
})
export class AddSubjectComponent {

  subject: Subject = new Subject();
  submitted = false;

  constructor(private subjectService: SubjectService) {}

  saveSubject(): void {
    this.subjectService.create(this.subject).then(() => {
      console.log('New Subject created');
      this.submitted = true;
    });
  }

  newSubject(): void {
    this.submitted = false;
    this.subject = new Subject();
  }
}
