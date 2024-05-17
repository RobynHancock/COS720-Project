import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';
import { Subject } from '../../models/subjects.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrl: './subjects-list.component.css'
})
export class SubjectsListComponent implements OnInit {
  subjects?: Subject[];
  currentSubject?: Subject;
  currentIndex = -1;
  code = '';

  constructor(private subService: SubjectService) {}

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
