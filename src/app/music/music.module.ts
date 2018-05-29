// ./src/app/music/music.module.ts

// Third party imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
// PrimeNG autocomplete fro search
import { AutoCompleteModule } from 'primeng/primeng';

// Custom imports
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';
import { SearchComponent } from './search/search.component';
@NgModule({
    imports: [
      // Define imports
      FormsModule,
      AutoCompleteModule,
      HttpModule,
      CommonModule
    ],
    exports: [
      // Expose components
      SearchComponent,
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
    ],
    declarations: [
      // Declare components
      SearchComponent,
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
      SearchComponent,
    ],
    providers: [
      // Services
      ApiService,
      MusicService
    ],
})
export class MusicModule { }