import { Component } from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {PostService} from "../../../core/services/post.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  public posts$: Observable<Post[]> = this.postService.getAllPosts();

  public direction: string = 'north';

  constructor(private postService: PostService) {}

  public sort(direction: string) {
    this.posts$ = this.posts$.pipe(map((posts) => {
        posts.sort((a, b) => {
          if (direction === 'north') {
            this.direction = 'south';
            return a.updatedAt > b.updatedAt ? 1 : -1;
          } else {
            this.direction = 'north';
            return a.updatedAt < b.updatedAt ? 1 : -1;
          }
        });
        return posts;
      })
    );
  }
}
