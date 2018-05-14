import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  playPauseButton: String;

  constructor() { }

  ngOnInit() {
    this.playPauseButton = 'fas fa-play';
  }

  playMusic() {
    if (this.playPauseButton === 'fas fa-play') {
      this.playPauseButton = 'fas fa-pause';
    } else {
      this.playPauseButton = 'fas fa-play';
    }
  }
}
