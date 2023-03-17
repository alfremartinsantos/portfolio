import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent {
@Input() 
dataWorkExperience: Object | undefined;
}
