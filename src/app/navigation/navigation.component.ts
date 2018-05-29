import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { }  from '@types/googlemaps';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  latitude:number;
  longitude:number;
  marker: any;
  @Input()
  start: String;
  @Input()
  arrival: String;
  directionsService: any;
  directionsDisplay: any;
  
  @ViewChild('gmap') gmapElement: any;
  @ViewChild('directionsPanel') directionsPanelElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() { 
    this.directionsDisplay  = new google.maps.DirectionsRenderer();
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(this.directionsPanelElement.nativeElement);
  }

   calcRoute() {
    this.directionsService = new google.maps.DirectionsService();
    var request = {
      origin: this.start,
      destination: this.arrival,
      travelMode: 'DRIVING'
    };
    this.directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(response);
      }
    });
  }
}
