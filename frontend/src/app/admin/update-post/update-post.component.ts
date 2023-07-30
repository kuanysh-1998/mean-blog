import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ICategories, IPost } from 'src/app/models/models';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss'],
})
export class UpdatePostComponent implements OnInit {
  form!: FormGroup;
  postId = '';
  categories: ICategories[] = [];
  selectedImage: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private categoriesService: CategoriesService,
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          this.postId = params['id'];

          return this.postsService.getPostById(params['id']);
        }),
      )
      .subscribe((post: IPost) => {
        if (post) {
          this.form = this.formBuilder.group({
            title: [post.title, Validators.required],
            category: [post.category, Validators.required],
            description: [post.description, Validators.required],
            image: [''],
          });
        }
      });
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      this.selectedImage = inputElement.files[0];
      this.form.patchValue({
        image: this.selectedImage,
      });
    }
  }

  // submit() {
  //   if (this.form.invalid) return;

  //   this.postsService.updatePost(this.postId, this.form.value).subscribe({
  //     next: (post: IPost) => {
  //       alert('Post updated successfully!');
  //       this.router.navigateByUrl(`/post/${post.id}`);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //       alert('Error updating post');
  //     },
  //   });
  // }
  submit() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('image', this.selectedImage); 
      formData.append('title', this.form.get('title')?.value);
      formData.append('category', this.form.get('category')?.value);
      formData.append('description', this.form.get('description')?.value);

      this.postsService.createPost(formData).subscribe({
        next: () => {
          alert('Success!');
        },
        error: (err) => {
          console.error(err);
          alert('Error creating post');
        },
      });
    } else {
      alert('Please select an image');
    }
  }
}
