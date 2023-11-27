import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    LoginComponent,
    VideoBackgroundComponent,
    SignupComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
