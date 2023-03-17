import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/cv.json").subscribe(data =>{
      this.cv = JSON.parse(JSON.stringify(data));     
    }) 
  }
}