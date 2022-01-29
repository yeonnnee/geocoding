import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '../components/main/main.component';
import { LoginComponent } from '../components/login/login.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ExpansionOverviewExample } from '../components/menu/menu.component';
import { AuthGuard } from 'src/guard/auth-guard';
import { AuthService } from 'src/service/auth-service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../components/register/register.component';
import { ErrorDirective } from 'src/directives/ErrorDirective';
import { ErrorMsgComponent } from 'src/components/common/error-message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {OverlayModule} from '@angular/cdk/overlay';
import { GridListComponent } from '../components/menu/grid-list.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { CommonModule } from '@angular/common';
import { MonitoringComponent } from 'src/components/monitoring/monitoring.component';
import { FormComponent } from 'src/components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavComponent,
    PageNotFoundComponent,
    ExpansionOverviewExample,
    RegisterComponent,
    ErrorDirective,
    ErrorMsgComponent,
    GridListComponent,
    MonitoringComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatExpansionModule,
    DragDropModule,
    OverlayModule,
    SignaturePadModule,
    CommonModule

  ],
  providers: [
    AuthService,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
