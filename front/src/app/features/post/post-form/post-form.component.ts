import { Component, OnInit } from '@angular/core';
import {Topic} from "../../../core/models/topic.model";
import {FormBuilder, Validators} from "@angular/forms";
import {Post} from "../../../core/models/post.model";
import {PostService} from "../../../core/services/post.service";
import {Router} from "@angular/router";

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

  public topics: Topic[] = [ // TODO: fetch from service
    {
      id: 1,
      title: 'Java',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 1,
      title: 'Angular',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 1,
      title: 'Spring Boot',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 1,
      title: 'JUnit 5',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const post = this.form.value as Post;
    console.log(post);

    this.postService
      .createPost(post)
      .subscribe((_: Post) => {
        this.router.navigate(['/posts']);
      })
  }
}
