import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './pages/register/register.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { PostCardComponent } from './components/post-card/post-card.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import {MatDividerModule} from "@angular/material/divider";
import { CommentComponent } from './components/comment/comment.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { TopicListComponent } from './pages/topic-list/topic-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, HeaderComponent, RegisterComponent, PostListComponent, PostCardComponent, SinglePostComponent, CommentComponent, TopicCardComponent, TopicListComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
