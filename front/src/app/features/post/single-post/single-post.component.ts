import { Component, OnInit } from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {Topic} from "../../../core/models/topic.model";
import {Comment} from "../../../core/models/comment.model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../core/services/post.service";
import {TopicService} from "../../../core/services/topic.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  public post: Post | undefined;
  public topic: Topic | undefined;
  public comments: Comment[] | undefined; // TODO: fetch comments

  public postId: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private topicService: TopicService,
  ) {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchPost()
  }

  private fetchPost(): void {
    this.postService
      .getPostById(this.postId)
      .subscribe(post => {
        this.post = post;
        this.topicService
          .getById(post.topicId)
          .subscribe(topic => {
            this.topic = topic;
          })
      });
  }
}
