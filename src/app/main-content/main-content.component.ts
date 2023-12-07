import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out'),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MainContentComponent {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  //bahan bakar, kapasitas, tenaga, girboks, jenis transmisi
  slides = [
    {
      video: '../../assets/video/fortuner.mp4',
      model: 'FORTUNER',
      price: 'Starting at 720 Million IDR',
      jbBakar: 'Diesel',
      capacity: '2393 cc',
      tenaga: '148 hp',
      girboks: '6-Speed',
      jTransmisi: 'Manual',
    },
    {
      video: '../../assets/video/raize.mp4',
      model: 'RAIZE',
      price: 'Starting at 235 Million IDR',
      jbBakar: 'Gas',
      capacity: '1198 cc',
      tenaga: '87 hp',
      girboks: '5-Speed',
      jTransmisi: 'Manual',
    },
    {
      video: '../../assets/video/sienta.mp4',
      model: 'SIENTA',
      price: 'Starting at 320 Million IDR',
      jbBakar: 'Gas',
      capacity: '1497 cc',
      tenaga: '106 hp',
      girboks: 'Variable Speed',
      jTransmisi: 'CVT',
    },
    {
      video: '../../assets/video/camry.mp4',
      model: 'CAMRY',
      price: 'Starting at 799 Million IDR',
      jbBakar: 'Gas',
      capacity: '2487 cc',
      tenaga: '201 hp',
      girboks: '8-Speed',
      jTransmisi: 'Automatic',
    },
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

  showMe: boolean[] = [];
  currentSlideIndex = 0;

  constructor() {
    // Initialize showMe array based on the number of slides
    this.showMe = Array(this.slides.length).fill(false);
  }

  toggleSpec(index: number) {
    // Toggle the showMe state for the clicked slide
    this.showMe[index] = !this.showMe[index];
  }

  onSlideChange(event: any) {
    this.currentSlideIndex = event.currentSlide;
  }
}
