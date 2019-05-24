import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MovieComponent } from './movie/movie.component';
import { ReviewComponent } from './review/review.component';

//update routes dependent on wireframe
const routes: Routes = [
  // {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  // {path: 'movie/new', component:NewComponent},
  {path: 'movie/details/:id', component:DetailsComponent},
  {path: 'movie/edit/:id', component:EditComponent},
  {path: 'movie', component:MovieComponent},
  {path: 'review', component:ReviewComponent},
  //catch all
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }