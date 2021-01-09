import { AfterViewInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;

  ngAfterViewInit(): void {
    console.log('Elemento ' +this.mapElement);
    const mapProperties = {
      center: new google.maps.LatLng(45.62238164022969, 9.409609965419818),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  ngOnInit(): void {
  }

}
