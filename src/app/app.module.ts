import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { MusicComponent } from './music/music.component';
import { PhoneComponent } from './phone/phone.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainMeniComponent } from './main-meni/main-meni.component';
import { MapService } from './navigation/map.service';
import { AuthComponent } from './auth/auth.component';

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
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MapService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
