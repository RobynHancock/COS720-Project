import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import {SUBJECTS} from '../mock-subjects';
import { /*...*/ NgFor, /*... */} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})

/* selector (the component's CSS element selector)
templateUrl (the location of the component's template file)
styleUrl (the location of the component's private CSS styles)
The CSS element selector 'app-subjects', matches the name of the 
HTML element that identifies this component within a parent
component's template.
Always export the component class so you can import it
elsewhere... like in AppModule.*/

export class SubjectsComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {
      
  }
  /*subject: Subject ={
    id: 'COS720',
    name: 'Computer Security'
  };*/
  //subjects = SUBJECTS;
  //selectedSubject?: Subject;

  /*subjects: Subject[] = [];

  

  constructor(private subService: SubjectService, private messageService: MessageService) {}

  ngOnInit(): void{
    this.getSubjects();
  }

  getSubjects() : void{
    this.subService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  /*onSelect(subject: Subject): void{
    this.selectedSubject = subject;
    this.messageService.add('SubjectsComponent: Selected subject id=${subject.id}');
  }*/
}
