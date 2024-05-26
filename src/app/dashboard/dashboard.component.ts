import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AddSubjectComponent } from '../subjects/add-subject/add-subject.component';
import { SubjectDetailsComponent } from '../subjects/subject-details/subject-details.component';
import { SubjectService } from '../subject.service';
import { Subject } from '../models/subjects.model';
import { SubjectsListComponent } from '../subjects/subjects-list/subjects-list.component';
import { map } from 'rxjs';
//import { Subject } from '../subject';
//import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  subjects?: Subject[];
  currentSubject?: Subject;
  currentIndex = -1;
  code = '';

  constructor(private subService: SubjectService, public authService: AuthService) {}

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
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ... c.payload.val() })
        )
      )
    ).subscribe(data => { this.subjects = data; });
  }

  setActiveSubject(subject: Subject, index: number): void {
    this.currentSubject = subject;
    this.currentIndex = index;
  }

  removeAllSubjects(): void {
    this.subService.deleteAll().then(() => this.refreshList())
    .catch(err => console.log(err));
  }
}
