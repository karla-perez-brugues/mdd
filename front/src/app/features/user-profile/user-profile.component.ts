import {Component, OnInit} from '@angular/core';
import {Topic} from "../../core/models/topic.model";
import {TopicService} from "../../core/services/topic.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public topics$: Observable<Topic[]> = this.topicService.getSubscribedTopicsByUser();

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
  }

}
