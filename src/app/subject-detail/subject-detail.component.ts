import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
      
  }
  //@Input() subject?: Subject;
  /*subject: Subject | undefined;
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private location: Location
  ) {}
  

  ngOnInit(): void{
    this.getSubject();
  }

  getSubject(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subjectService.getSubject(id).subscribe(subject => this.subject = subject);
  }

  goBack(): void{
    this.location.back();
  }*/
}
