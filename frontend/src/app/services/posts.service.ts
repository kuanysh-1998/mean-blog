import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/models';
import { POSTS_URL } from '../shared/urls';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  token = '';
  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {
    this.userService.userObservable.subscribe((user) => {
      this.token = user.token;
    });
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(POSTS_URL);
  }

  createPost(formData: FormData): Observable<IPost> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.post<IPost>(POSTS_URL, formData, {headers});
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(POSTS_URL + `/${id}`);
  }
}
