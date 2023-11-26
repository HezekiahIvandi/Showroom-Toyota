import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  slides = [
    { img: '../../assets/img/slide-images/1.jpg' },
    { img: '../../assets/img/slide-images/2.jpg' },
    { img: '../../assets/img/slide-images/4.jpg' },
    { img: '../../assets/img/slide-images/5.jpg' },
  ];

  slideConfig = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
