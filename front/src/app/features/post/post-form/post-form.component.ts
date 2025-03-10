import { Component, OnInit } from '@angular/core';
import {Topic} from "../../../core/models/topic.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public topics: Topic[] = [
    {
      id: 1,
      title: 'Java',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 2,
      title: 'Angular',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 3,
      title: 'Spring Boot',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
    {
      id: 4,
      title: 'JUnit 5',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat tempus metus quis dictum. Fusce lacinia sollicitudin sodales. Mauris id ipsum venenatis, tincidunt diam sed, pulvinar enim. Duis rutrum quam eget risus commodo ullamcorper. Sed nec blandit neque, in varius nibh. Morbi faucibus accumsan lacus non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dui diam, rhoncus eget condimentum dictum, interdum eu orci. Quisque accumsan eleifend nisl ut venenatis. Etiam eleifend diam semper lectus lacinia mattis.",
      subscribers: [],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly top = top;
}
