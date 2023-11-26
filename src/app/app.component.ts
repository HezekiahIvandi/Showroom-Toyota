import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    MainContentComponent,
    VideoBackgroundComponent,
    SlickCarouselModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'angular-2';
}
