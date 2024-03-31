import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resume:Resume = null;
  
  constructor(
    public resumeService: ResumeService
  ) {
  }

  ngOnInit(): void {

    this.initResume();
  }

  initResume() {
    this.resumeService.resume = { ...this.resumeService.resume,
      Banner: { 
        Pretitle : 'Hello! My name is',
        Description : 'Dedicated front-end developer based in India, specializing in Angular. With a keen eye for detail and a passion for clean, efficient code, I strive to create dynamic and responsive web applications that elevate user experiences. Experienced in translating design concepts into seamless, interactive features.',
        ActionBtn : 'Get in touch',
      },
      AboutMe: {
        Title: 'About me',
        Paragraphs: ['With 4 years as a developer,',`I've honed skills in unit testing, continuous integration, and backend roles using Laravel and MySQL.`]
      },
      Experience: {
        Title: 'Experience',
        Jobs: [
          {
            Title: 'Fullstack developer',
            Date: "December 2019 - Present",
            Tab: "Prakya",
            Description: [
              "Creation and maintenance of a monitoring platform with graphics in WordPress.",
              "Functional programming in templates and plugins to add the necessary monitoring features.",
              "Implementation of continuous integration and daily backups.",
              "Creation and maintenance of a second Monitoring Platform Done in Angular, Angular Material, Laravel, Mysql, RxJS, Sass with graphics (configurable), alarm system, and user management and configuration of general parameters.",
              "Planning meetings in reports."
            ]
          },
          {
            Title: 'Independent',
            Date: "May 2016 - Present",
            Tab: "Freelancer",
            Description: [
              "Implementing continuous improvements, working on frontend and backend.",
              "Creating platforms with Angular, Laravel, ExpressJS, WordPress programmed with functional, reactive, and object-oriented programming paradigms.",
              "Automation of processes with data structures.",
              "Design layout with SASS, Bootstrap, Materialize, Bulma, etc."
            ]
          },
          {
            Title: 'Frontend developer',
            Date: "February 2016 - May 2017",
            Tab: "RealPage",
            Description: [
              "Creation of WordPress templates with ACF, functional programming in Javascript / jQuery, styles in SASS",
              "integration of design improvements, and template loading times.",
              "Effective communication with the design team, working with Avocode / Figma."
            ]
          },
        ]
      },
      FeatureProjects: {
        Title: "My projects",
        Label : "Featured Project",
        Projects:[
          {
            Title: "Agrourbana",
            Description: "Monitoring application made from scratch with auth module",
            imgs: [
              "assets/images/agrourbana/agrourbana1.png",
              "assets/images/agrourbana/agrourbana2.png",
              "assets/images/agrourbana/agrourbana3.png",
              "assets/images/agrourbana/agrourbana4.png",
              "assets/images/agrourbana/agrourbana5.png"
            ],
            Technologies: ["Laravel", "Angular", "SASS", "Angular Material", "RxJS"]
          }
        ]
      },
      Contact: {
        Pretitle:'What’s Next',
        Title: "Get in touch!",
        Content:  "I will be happy to receive your contact if you want to talk about new opportunities. Write me, and I will reply as soon as I see your message. Simple one-page design that features a profile letter with basic information about a person.",
        Btn: "Say Hello"
      }
    }





    this.resume = this.resumeService.resume;
  }

}
