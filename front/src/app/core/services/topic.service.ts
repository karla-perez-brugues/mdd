import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../models/topic.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private pathService = '/api/topic';

  constructor(private httpClient: HttpClient) {}

  public getAllTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(`${this.pathService}`);
  }

  public getById(id: string): Observable<Topic> {
    return this.httpClient.get<Topic>(`${this.pathService}/${id}`);
  }

  public getSubscribedTopicsByUser(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(`${this.pathService}/user`);
  }

  public subscribe(id: string): Observable<Topic> {
    return this.httpClient.post<Topic>(`${this.pathService}/${id}/subscribe`, null);
  }

  public unsubscribe(id: string): Observable<Topic> {
    return this.httpClient.delete<Topic>(`${this.pathService}/${id}/unsubscribe`);
  }
}
