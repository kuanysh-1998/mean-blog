import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss'],
})
export class HeaderTopComponent implements OnInit {
  currentUser!: User;
  showMenu = false;
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.userService.userObservable.subscribe((user) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  logout() {
    this.userService.logout();
  }

  openSearchWindow() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '80px',
    };

    this.dialog.open(MatDialogComponent, dialogConfig);
  }
}
