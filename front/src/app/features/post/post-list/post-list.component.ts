import { Component } from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {PostService} from "../../../core/services/post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  public posts$: Observable<Post[]> = this.postService.getAllPosts();

  public sortByDesc = true;

  constructor(private postService: PostService) { }


}
