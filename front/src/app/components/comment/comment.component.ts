import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../core/models/comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
