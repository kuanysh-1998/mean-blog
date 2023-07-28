import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent implements OnInit {
  currentUser!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userObservable.subscribe((user) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  logout() {
    this.userService.logout();
  }
}
