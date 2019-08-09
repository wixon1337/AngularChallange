import { Component, OnInit, Input } from '@angular/core';
import { Meeting } from '../meeting.model';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  @Input()
  model: Meeting;

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.log(this.model.title);
  }
}
