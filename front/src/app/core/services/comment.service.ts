import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private pathService = '/api/post/';

  constructor(private httpClient: HttpClient) {}

  public getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.pathService}/${postId}/comment`);
  }

  public create(postId: string, comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(`${this.pathService}/${postId}/comment`, comment);
  }

}
