import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { UpdatePostComponent } from './admin/update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'post/:id',
    component: PostPageComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'users/:userId/verify/:token',
    component: VerifyEmailComponent,
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
  },
  {
    path: 'admin/post/:id/update',
    component: UpdatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
