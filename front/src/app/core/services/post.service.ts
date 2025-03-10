import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private pathService = '/api/post';

  constructor(private httpClient: HttpClient) {}

  public getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.pathService}`);
  }

  public getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.pathService}/${id}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.pathService}`, post);
  }

}
