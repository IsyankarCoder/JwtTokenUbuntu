import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    HomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
