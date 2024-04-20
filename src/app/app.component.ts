import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser'; 
import {LanguageService} from "src/app/services/language/language.service" 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'karthikc-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta, 
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Karthik Cherukupalli | Frontend Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'A front-end developer designs and implements user interfaces for websites and web applications, focusing on creating engaging and responsive experiences.'},
    ]);
    
    
    AOS.init(); 

  }
}
