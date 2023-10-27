import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Component/index/index.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {
    path: 'index', // index
    component: IndexComponent
  }, 
  {
    path: '**', // Page d'accueil 
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
