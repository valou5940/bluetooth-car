import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MusicModule } from './music/music.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { MusicComponent } from './music/music.component';
import { PhoneComponent } from './phone/phone.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainMeniComponent } from './main-meni/main-meni.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main-menu', component: MainMeniComponent },
  { path: 'music', component: MusicComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'phone', component: PhoneComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    MusicComponent,
    PhoneComponent,
    NavigationComponent,
    MainMeniComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
