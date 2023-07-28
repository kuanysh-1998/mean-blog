import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  constructor(
    private postsService: PostsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  openPostById(id: string | undefined) {
    this.router.navigateByUrl(`/post/${id}`);
  }
}
