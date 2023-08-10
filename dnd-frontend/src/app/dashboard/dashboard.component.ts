import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string = ''; // Initialize with the logged-in username

  constructor() { }

  ngOnInit(): void {
    // Fetch the logged-in username from your authentication service
    // For demonstration purposes, you can set a sample username
    this.username = 'Paras';
  }
}
