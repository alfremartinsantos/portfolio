import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personalDetails } from './core/models/personal-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  titlePersonalDetails = 'Datos personales';
  titleEducation = 'Estudios realizados';
  titleWorkExperience = 'Experiencia Laboral';
  cv : any;

  Education: Education = {
      title: '',
      center: '',
      dateStart: new Date(),
      dateEnd: new Date()
};

  constructor(private http: HttpClient) { }

  PersonalDetails : personalDetails = {} as personalDetails;

  ngOnInit(): void {
    this.http.get("assets/cv.json").subscribe(data =>{
      const CVJSON = JSON.parse(JSON.stringify(data)); // JSON proporcionado

      this.PersonalDetails = CVJSON.personalDetails;
      this.Education = CVJSON.education;
    });
  }
}
export interface Education{
  title: string,
  center: string,
  dateStart: Date,
  dateEnd: Date
}
export interface WorkExperience {
  job: string;
  company: string;
  skills: { skill: string }[];
  dateStart: Date;
  dateEnd: Date;
}
export interface CV {
  personalDetails: personalDetails;
  education: Education[];
  workExperience: WorkExperience[];
}