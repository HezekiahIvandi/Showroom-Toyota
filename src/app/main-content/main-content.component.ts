import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  slides = [
    {video: '../../assets/video/fortuner.mp4',text: 'Fortuner',price:'Start From Rp.720.850.000'},
    {video: '../../assets/video/raize.mp4',text: 'Raize',price:'Start From Rp.235.000.000'},
    {video: '../../assets/video/sienta.mp4',text: 'Sienta',price:'Start From Rp.320.000.000'},
    {video: '../../assets/video/camry.mp4',text: 'Camry',price:'Start From Rp.799.300.000'},
  ];
  
  switchVideos(number: number) {
    this.slickModal.slickGoTo(number);
  }

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
