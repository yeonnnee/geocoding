import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home',  component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'menu1', component: MenuComponent },
  { path: 'menu2', component: MenuComponent },
  { path: 'menu3', component: MenuComponent },
  { path: 'menu4', component: MenuComponent },
  { path: 'menu5', component: MenuComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
