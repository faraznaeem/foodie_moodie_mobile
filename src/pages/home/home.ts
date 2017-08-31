import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor() {
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 13,
      center: {lat: 59.329323, lng: 18.068581}
    });

  }
}
