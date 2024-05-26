import { Component, OnInit } from '@angular/core';
import { SubjectRegistration } from '../../models/subject-registration.model';
import { SubjectRegistrationService } from '../../shared/services/subject-registration.service';
import { SubjectService } from '../../subject.service';
import { Subject } from '../../models/subjects.model';
import { map } from 'rxjs';
import { AuthService } from '../../shared/auth.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../models/user.model';

import{MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

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
  allSubjects?: any[];
  code = '';
  user = '';

  constructor(private userService: UserService, private srService: SubjectRegistrationService, private subService: SubjectService, public authService: AuthService) {}

  ngOnInit(): void {
      this.retrieveSubjects();
      this.user = this.authService.getStudentNumber();
      //this.user = this.authService.getUserEmail;
      //this.subreg.uid = this.user;
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
