import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategories } from 'src/app/models/models';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  form!: FormGroup;
  selectedImage: File | null = null;
  categories: ICategories[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private postsService: PostsService,
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
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
