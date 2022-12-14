import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './App-Routing/app-routing.module';
import { UserAccountModule } from './user-account/user-account.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RootStoreModule } from './@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAccountModule,
    HomeModule,
    DashboardModule,
    MatSnackBarModule,
    HttpClientModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
