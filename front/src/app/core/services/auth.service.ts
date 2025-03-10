import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterRequest} from "../interfaces/registerRequest.interface";
import {LoginRequest} from "../interfaces/loginRequest.interface";
import {SessionInformation} from "../interfaces/sessionInformation.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathService = '/api/auth';

  constructor(private http: HttpClient) {}

  public register(registerRequest: RegisterRequest): Observable<SessionInformation> {
    return this.http.post<SessionInformation>(`${this.pathService}/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<SessionInformation> {
    return this.http.post<SessionInformation>(`${this.pathService}/login`, loginRequest);
  }
}
