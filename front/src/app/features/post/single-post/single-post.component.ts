import { Component, OnInit } from '@angular/core';
import {Post} from "../../../core/models/post.model";
import {Topic} from "../../../core/models/topic.model";
import {Comment} from "../../../core/models/comment.model";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post: Post = {
    id: 1,
    title: 'Title',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
    author: 'Author Username',
    topicId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  topic: Topic = {
    id: 1,
    title: 'Java',
    description: 'description',
    subscribers: []
  }

  comments: Comment[] = [
    {
      id: 1,
      content: 'Un commentaire pertinent',
      author: 'Author Username',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
