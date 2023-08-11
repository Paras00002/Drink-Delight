import { Component } from '@angular/core';
import { Profile } from '../models/profile.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  firstname: string = ''; // Initialize with the logged-in username
  lastname: string = '';
  phoneno: string = '';
  email: string = '';
  designation: string = '';
  gender: string = '';
  dateofbirth: string = '';
  city: string = '';

  user1: Profile;

  constructor(private route: ActivatedRoute) {
    this.user1 = new Profile();
  }

  ngOnInit() {
    // Retrieve the registered username from the query parameters

    this.route.queryParams.subscribe((params) => {
      this.firstname = params['firstname'];

      this.lastname = params['lastname'];

      this.phoneno = params['phoneno'];

      this.email = params['email'];

      this.designation = params['designation'];

      this.gender = params['gender'];

      this.designation = params['designation'];

      this.dateofbirth = params['dateOfBirth'];

      console.log(params['user1']);

      this.user1 = params['user1'];

      // this.loginusername=params['username'];

      // console.log(registeredEmail);

      console.log(this.firstname);

      console.log(this.user1);

      // You can access other parameters here if needed
    });
  }
}
