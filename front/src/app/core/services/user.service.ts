import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pathService = '/api/user';

  constructor(private httpClient: HttpClient) {}

  public update(user: User): Observable<void> {
    return this.httpClient.put<void>(`${this.pathService}/update`, user);
  }

}
