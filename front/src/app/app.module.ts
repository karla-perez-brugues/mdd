import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './features/auth/register/register.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PostCardComponent } from './components/post-card/post-card.component';
import { SinglePostComponent } from './features/post/single-post/single-post.component';
import {MatDividerModule} from "@angular/material/divider";
import { CommentComponent } from './components/comment/comment.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicListComponent } from './features/topic-list/topic-list.component';
import { PostFormComponent } from './features/post/post-form/post-form.component';
import {MatSelectModule} from "@angular/material/select";
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "../interceptors/jwt.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, HeaderComponent, RegisterComponent, PostListComponent, PostCardComponent, SinglePostComponent, CommentComponent, TopicCardComponent, TopicListComponent, PostFormComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
