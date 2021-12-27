import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/guard/auth-guard';
import { RegisterComponent } from 'src/components/register/register.component';

const routes: Routes = [
  { path: 'home',  component: MainComponent , canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu1', component: MenuComponent,canActivate:[AuthGuard] },
  { path: 'menu2', component: MenuComponent,canActivate:[AuthGuard] },
  { path: 'menu3', component: MenuComponent,canActivate:[AuthGuard] },
  { path: 'menu4', component: MenuComponent,canActivate:[AuthGuard] },
  { path: 'menu5', component: MenuComponent,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
