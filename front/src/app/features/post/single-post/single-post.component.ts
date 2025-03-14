import { Component, OnInit } from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {Topic} from "../../../core/models/topic.model";
import {Comment} from "../../../core/models/comment.model";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../core/services/post.service";
import {TopicService} from "../../../core/services/topic.service";
import {CommentService} from "../../../core/services/comment.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  public post: Post | undefined;
  public topic: Topic | undefined;
  public comments: Comment[] | undefined;

  public postId: string;

  public commentForm: FormGroup = this.fb.group({
    content: ['', [Validators.required]],
  })

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private topicService: TopicService,
    private commentService: CommentService,
    private fb: FormBuilder,
  ) {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchPost()
  }

  public submit(): void {
    const commentRequest: Comment = this.commentForm.value as Comment;

    this.commentService
      .create(this.postId, commentRequest)
      .subscribe(comment => {
        this.comments?.push(comment);
        this.commentForm.reset();
      })
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
          }
        );
        this.commentService
          .getCommentsByPostId(this.postId)
          .subscribe(comments => {
            this.comments = comments;
          })
      }
    );
  }
}
