import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, User, UserData } from '../data/users';
import { NbTokenService } from '@nebular/auth';

@Injectable(
)
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },

  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },

  ];
  private recentUsers: RecentUsers[] = [
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
    { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
  ];

  constructor() {
    super();
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }

  authenticate(): Observable<any> {
    return observableOf('');
  }
}
