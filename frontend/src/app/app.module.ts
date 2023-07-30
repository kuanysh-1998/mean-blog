import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { QuillModule } from 'ngx-quill';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { HeaderTopComponent } from './partials/header-top/header-top.component';
import { HeaderBottomComponent } from './partials/header-bottom/header-bottom.component';
import { PostsComponent } from './partials/posts/posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogComponent } from './partials/mat-dialog/mat-dialog.component';
import { FilterPostsPipe } from './pipes/filter-posts.pipe';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LoadingInterceptor } from './shared/loading.interceptor';
import { LoadingComponent } from './partials/loading/loading.component';
import { UpdatePostComponent } from './admin/update-post/update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    PostsComponent,
    PostPageComponent,
    RegisterComponent,
    LoginPageComponent,
    VerifyEmailComponent,
    MatDialogComponent,
    FilterPostsPipe,
    CreatePostComponent,
    FooterComponent,
    LoadingComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    QuillModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
