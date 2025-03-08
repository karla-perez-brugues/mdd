import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PostListComponent} from "./pages/post-list/post-list.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";
import {TopicListComponent} from "./pages/topic-list/topic-list.component";
import {PostFormComponent} from "./pages/post-form/post-form.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: UserProfileComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'posts/create', component: PostFormComponent },
  { path: 'topics', component: TopicListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
