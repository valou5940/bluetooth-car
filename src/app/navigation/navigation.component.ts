import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import  MapboxDirections from '@mapbox/mapbox-gl-directions';
import { MapService } from './map.service';
import { GeoJson, FeatureCollection } from './map';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 



@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v10';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';

  // data
  source: any;
  markers: any;

  constructor(private mapService: MapService, private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.anonymousLogin();
    this.markers = this.mapService.getMarkers()
    this.initializeMap()
  }

  private initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }

    this.buildMap()

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }), 'top-left');

    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarker   = new GeoJson(coordinates, { message: this.message })
      this.mapService.createMarker(newMarker)
    })


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('firebase', {
         type: 'geojson',
         data: {
           type: 'FeatureCollection',
           features: []
         }
      });

      /// get source
      this.source = this.map.getSource('firebase')

      /// subscribe to realtime database and set data source
      this.markers.subscribe(markers => {
          let data = new FeatureCollection(markers)
          this.source.setData(data)
      })

      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'rocket-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })

    })
    this.map.resize();
  }


  /// Helpers

  removeMarker(marker) {
    this.mapService.removeMarker(marker.$key)
  }

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }

  

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
    // .then((user) => {
    //   this.authState = user
    //   this.updateUserData()
    // })
    .catch(error => console.log(error));
  }
}