import { Component, Input, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() resumeData:Resume;
  constructor( 
  ) { }

  ngOnInit(): void {
  }

}
