import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.sass']
})
export class PersonalDetailsComponent {
  @Input() dataPersonal: Object | undefined;
  name: string = ""
  lastName: string = ""
  address: string = ""
  city: string = ""
  postalCode: string = ""
  state: string = ""

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataPersonal);
  }  
}
