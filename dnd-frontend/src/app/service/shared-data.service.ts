import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private userDetails = new BehaviorSubject<any>(null);
  userDetails$ = this.userDetails.asObservable();

  constructor() {}

  updateUserDetails(data: any) {
    this.userDetails.next(data);
  }
}
