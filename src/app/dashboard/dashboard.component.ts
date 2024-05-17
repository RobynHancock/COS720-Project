import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
//import { Subject } from '../subject';
//import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
      
  }
  //subjects: Subject[] = [];

  //constructor(private subjectService: SubjectService) {}

  /*ngOnInit(): void {
      //this.getSubjects();
  }*/

  /*getSubjects(): void{
    this.subjectService.getSubjects().subscribe(subjects => this.subjects.slice(1, 5));
  }*/
}
