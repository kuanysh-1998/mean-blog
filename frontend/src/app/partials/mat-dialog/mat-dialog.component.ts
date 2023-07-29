import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/models';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent implements OnInit {
  posts!: IPost[];
  searchPost: string = '';
  constructor(
    private postsService: PostsService,
    private router: Router,
    private dialogRef: MatDialogRef<MatDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  openPostById(id: string | undefined) {
    this.router.navigateByUrl(`/post/${id}`);
    this.dialogRef.close();
  }

}
