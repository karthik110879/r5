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
        Description : 'A passionate web developer with extensive experience in designing and developing SaaS applications. With a solid foundation in a wide range of web technologies, I specialize in creating scalable, efficient, and visually appealing solutions that meet client needs.',
        ActionBtn : 'Get in touch',
      },
      AboutMe: {
        Title: 'About me',
        Paragraphs: [`Currently, I serve as a Lead Software Engineer at <span class='underline' style='cursor: pointer;'><a class='underline' href='https://prakya.com/' target='_blank'>Prakya Inc.</a></span>,where I specialize in developing and maintaining user interfaces using various versions of Angular.`,
        `My role involves collaborating with backend developers to ensure seamless data flow and functionality, engaging with clients to translate requirements into desired functionalities, and implementing robust UI/UX strategies.`,
          `Earlier in my career, I was a 3D Animator at <span class='underline'><a class='underline' href='https://www.realpage.com/' target='_blank'>RealPage India Pvt. Ltd.</a></span> , where I developed interactive web interfaces and integrated 3D animations to enhance user engagement. My work involved using tools like Pano2Vr, Blender and 3Ds Max to create dynamic visual elements for web projects and virtual tours.`,
          `Some of the technologies that I have trained and worked on include (but are not limited to):`
        ]
      },
      Experience: {
        Title: 'Experience',
        Jobs: [
          {
            Title: 'Lead Software Engineer',
            Date: "December 2021 - Present",
            Tab: "Prakya",
            Description: [
              "Developed and maintained user interfaces using various versions of Angular (8, 9, 13, 15), ensuring high performance and responsiveness.",
              "Designed and implemented applications using Ionic 4/5, delivering cross-platform solutions for client transportation businesses.",
              "Utilized PrimeNG library to enhance UI components, improving the overall user experience and functionality of the applications.",
              "Collaborated with backend developers to integrate APIs, ensuring seamless data flow and robust functionality across the platform.",
              "Followed Agile methodologies, including running sprints, sprint planning, and utilizing Kanban boards for task management, improving team efficiency and project delivery.",
              "Built end-to-end solutions using Ionic, from initial requirement gathering to deployment, ensuring the delivery of comprehensive and effective applications.",
              "Contributed to the development of Prakya, a platform similar to Jira, focusing on Agile project management features, enhancing team collaboration and productivity.",
              "Designed and implemented UI/UX strategies, ensuring a user-centric approach to interface design and user experience.",
              "Acted as a maintainer for version control tools GitHub and GitLab, managing and reviewing the codebase, and ensuring builds are ready for deployment.",
            ]
          },
          {
            Title: 'Blackbody Technologies(Frontend Developer)',
            Date: "June 2020 - Jan 2021",
            Tab: "Freelancer",
            Description: [
              "Assisted in developing and maintaining user interfaces using Angular, gaining hands-on experience with different versions.",
              "Collaborated with backend developers to integrate APIs, learning to ensure smooth data flow and functionality.",
              "Participated in designing the user experience interface (UI/UX) strategy, converting findings into UI designs.",
              "DDesigned layouts with SASS, Bootstrap, Materialize, and Bulma, gaining proficiency in modern web design frameworks."
            ]
          },
          {
            Title: '3D Animator',
            Date: "February 2016 - May 2017",
            Tab: "RealPage",
            Description: [
              "Developed interactive web interfaces using HTML5, CSS, and JavaScript to enhance user engagement.",
              "Collaborated with developers to create visually appealing and user-friendly web applications.",
              "Integrated 3D animations into websites, enriching the user experience with dynamic visual elements.",
              "Utilized tools like Blender and Unity to create and implement 3D animations and graphics for web projects.",
              "Engaged in code reviews and team meetings, receiving constructive feedback and improving coding practices.",
              "Effective communication with the design team, working with Adobe Photoshop / Figma.",
              "Created virtual tours of interiors using Pano2VR, allowing clients to explore spaces through AWS S3 hosted links."
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
