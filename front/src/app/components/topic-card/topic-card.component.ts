import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../core/models/topic.model";
import {TopicService} from "../../core/services/topic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  @Input() topic!: Topic;

  public unsubscribeButtonLabel!: string;
  public buttonClass!: string;

  constructor(
    private topicService: TopicService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('account')) {
      this.unsubscribeButtonLabel = 'Se désabonner';
      this.buttonClass = 'account';
    } else {
      this.unsubscribeButtonLabel = 'Déjà abonné';
      this.buttonClass = 'topic-list';
    }
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
