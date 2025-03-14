import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../core/models/topic.model";
import {TopicService} from "../../core/services/topic.service";

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  @Input() topic!: Topic;

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
  }

  public subscribe(): void {
    this.topicService.subscribe(this.topic.id).subscribe(topic => {
      this.topic = topic;
    });
  }

  public unsubscribe(): void {
    this.topicService.unsubscribe(this.topic.id).subscribe(topic => {
      this.topic = topic;
    });
  }

}
