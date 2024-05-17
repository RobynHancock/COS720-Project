import { Component, OnInit } from '@angular/core';
import { SubjectRegistration } from '../../models/subject-registration.model';
import { SubjectRegistrationService } from '../../shared/services/subject-registration.service';
import { SubjectService } from '../../subject.service';
import { Subject } from '../../models/subjects.model';
import { map } from 'rxjs';

import{MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-registration',
  templateUrl: './subject-registration.component.html',
  styleUrl: './subject-registration.component.css'
})
export class SubjectRegistrationComponent implements OnInit {
  subreg: SubjectRegistration = new SubjectRegistration();
  submitted = false;

  subjects?: Subject[];
  currentSubject?: Subject;
  currentIndex = -1;
  code = '';

  constructor(private srService: SubjectRegistrationService, private subService: SubjectService) {}

  ngOnInit(): void {
      this.retrieveSubjects();
  }

  refreshList(): void {
    this.currentSubject = undefined;
    this.currentIndex = -1;
    this.retrieveSubjects();
  }

  retrieveSubjects(): void {
    this.subService.getAll().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key: c.payload.key, ...c.payload.val() })
      )
    )).subscribe(data => {
      this.subjects = data;
    });
  }

  saveSubjectRegistration(): void {
    this.srService.create(this.subreg).then(() => {
      console.log('Registered for modules');
      this.submitted = true;
    });
  }

  newSubjectRegistration(): void {
    this.submitted = false;
    this.subreg = new SubjectRegistration();
  }
}
