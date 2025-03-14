import { Component, OnInit } from '@angular/core';
import {Topic} from "../../../core/models/topic.model";
import {FormBuilder, Validators} from "@angular/forms";
import {Post} from "../../../core/models/post.model";
import {PostService} from "../../../core/services/post.service";
import {Router} from "@angular/router";
import {TopicService} from "../../../core/services/topic.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['',  [Validators.required]],
    topicId: ['',  [Validators.required]]
  });

  public topics$: Observable<Topic[]> = this.topicService.getAllTopics();

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const post = this.form.value as Post;

    this.postService
      .createPost(post)
      .subscribe((_: Post) => {
        this.router.navigate(['/posts']);
      })
  }
}
