import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './schema/header/header.component';
import { FooterComponent } from './schema/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './schema/sections/education/education.component';
import { PersonalDetailsComponent } from './schema/sections/personal-details/personal-details.component';
import { WorkExperienceComponent } from './schema/sections/work-experience/work-experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    PersonalDetailsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
