import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './partials/header/header.component';
import { HeaderTopComponent } from './partials/header-top/header-top.component';
import { HeaderBottomComponent } from './partials/header-bottom/header-bottom.component';
import { PostsComponent } from './partials/posts/posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { RegisterComponent } from './pages/register/register.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
