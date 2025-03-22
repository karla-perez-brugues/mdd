import { Component } from '@angular/core';
import {Topic} from "../../core/models/topic.model";
import {Observable} from "rxjs";
import {TopicService} from "../../core/services/topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent {
  public topics$: Observable<Topic[]> = this.topicService.getAllTopics();

  constructor(private topicService: TopicService) {}

}
