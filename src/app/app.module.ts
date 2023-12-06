import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainContentComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
