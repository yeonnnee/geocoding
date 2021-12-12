import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '../components/main/main.component';
import { LoginComponent } from '../components/login/login.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavComponent,
    PageNotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
