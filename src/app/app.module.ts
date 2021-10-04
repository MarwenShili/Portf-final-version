import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
//import { AngularFontAwesomeModule} from 'angular-font-awesome';


import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxTypedJsModule} from 'ngx-typed-js';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { MyservicesComponent } from './component/myservices/myservices.component';
import { SkillsComponent } from './component/skills/skills.component';
import { TeamsComponent } from './component/teams/teams.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { ScrollComponent } from './component/scroll/scroll.component';
import { RatingComponent } from './component/rating/rating.component';
import { ContentRatingComponent } from './component/rating/content-rating/content-rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './component/profile/profile.component';
import { EducationsComponent } from './component/educations/educations.component';
import { ProjectsComponent } from './component/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MyservicesComponent,
    SkillsComponent,
    TeamsComponent,
    ContactComponent,
    FooterComponent,
    ScrollComponent,
    RatingComponent,
    ContentRatingComponent,
    ProfileComponent,
    EducationsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  FontAwesomeModule,
    CarouselModule ,
    NgxTypedJsModule,
    FontAwesomeModule
   // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
