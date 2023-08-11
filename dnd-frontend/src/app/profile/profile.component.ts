import { Component, Input } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() firstName:String='';

  @Input() lastName: String = '';

  @Input() phoneNo:String='';

  @Input() email:String='';

  @Input() designation:String=''

  @Input() gender:String=''
 @Input() dateOfBirth:String='';

  @Input() user1:Profile;
  submitted:boolean;

  constructor(private router: Router) {
 
   this.user1=new Profile();
 
   this.submitted=false
 
  }

  onSubmit() {

    this.submitted=true;
  
    console.log('Username:', this.user1);
  
    this.router.navigate(['/dashboard'], {

      queryParams: {
   
       firstname: this.user1.firstName,
   
       lastname:this.user1.lastName,

       phoneNo:this.user1.phoneNo,

       email:this.user1.email,

       designation:this.user1.designation,

       gender:this.user1.gender,

       dateOfBirth:this.user1.dateOfBirth,


       city:this.user1.city,
  
      }
   
     });
   
    }
 }

