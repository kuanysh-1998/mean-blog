import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  userId!: any;
  token!: any;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get('userId');
      this.token = params.get('token');
    });

    this.userService.verifyEmail(this.userId, this.token).subscribe((value) => {
      alert('Ваша электронная почта успешно подтверждена!');
    });
  }
}
