import { Component, Input, SimpleChanges } from '@angular/core';
import { personalDetails } from 'src/app/core/models/personal-details';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.sass']
})
export class PersonalDetailsComponent {
  @Input() 
  dataPersonal: personalDetails = new personalDetails();

  name : string | undefined = '';
  lastName : string | undefined = '';
  address : string | undefined = '';
  postalCode : string | undefined = '';
  city : string | undefined = '';
  state : string | undefined = '';

  constructor() { }
  ngOnInit(): void { }  

  ngOnChanges(changes: SimpleChanges): void {
    this.name = this.dataPersonal.name;
    this.lastName = this.dataPersonal.lastName;
    this.address = this.dataPersonal.address;
    this.postalCode = this.dataPersonal.postalCode;
    this.city = this.dataPersonal.city;
    this.state = this.dataPersonal.state;
  }
}
