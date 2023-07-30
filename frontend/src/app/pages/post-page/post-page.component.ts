import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from 'src/app/models/models';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostPageComponent implements OnInit {
  post!: IPost | any;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          return this.postsService.getPostById(params['id']);
        }),
      )
      .subscribe((post) => {
        this.post = post;
      });
  }

  updatePostById(id: string) {
    this.router.navigateByUrl(`/admin/post/${id}/update`);
  }
}
