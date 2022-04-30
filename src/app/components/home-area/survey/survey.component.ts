import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  // משולשים בשביל להגיד איזה טיפוס נתונים אני מדווח 

  @Output()
  report = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendResult(result: string):void {
    this.report.emit(result)

  }

}
