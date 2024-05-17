import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../models/subjects.model';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.css'
})
export class SubjectDetailsComponent implements OnInit {

  @Input() subject?: Subject;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentSubject: Subject = {
    code: '',
    name: ''
  };
  message = '';

  constructor(private subService: SubjectService) {}

  ngOnInit(): void {
      this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentSubject = { ...this.subject}; 
  }

  updateSubject(): void{
    const data = {
      code: this.currentSubject.code,
      name: this.currentSubject.name
    };

    if(this.currentSubject.key) {
      this.subService.update(this.currentSubject.key, data)
      .then(() => this.message = 'The subject has been updated')
      .catch(err=> console.log(err));
    }
  }

  deleteSubject(): void {
    if(this.currentSubject.key) {
      this.subService.delete(this.currentSubject.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The subject has been deleted.';
        })
        .catch(err=> console.log(err));
    }
  }

}
