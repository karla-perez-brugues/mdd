import { Component, OnInit } from '@angular/core';
import {Post} from "../../core/models/post.model";

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    {
      id: 1,
      title: 'Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      author: 'Author Username',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      author: 'Author Username',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      author: 'Author Username',
      topicId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
