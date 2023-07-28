import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/interfaces';
import { BASE_URL, POSTS_URL } from '../shared/urls';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(POSTS_URL);
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(POSTS_URL + `/${id}`);
  }
}
