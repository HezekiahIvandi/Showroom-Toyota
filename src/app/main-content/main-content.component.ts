import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  slides = [
    {video: '../../assets/video/fortuner.mp4'},
    {video: '../../assets/video/raize.mp4'},
    {video: '../../assets/video/sienta.mp4'},
    {video: '../../assets/video/camry.mp4'},
  ];

  slideConfig = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
