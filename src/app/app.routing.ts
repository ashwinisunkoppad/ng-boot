import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'disp',component:WelcomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
