import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ParkingSpotComponent } from './parking-spot/parking-spot.component';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ParkingSpotComponent,
    ParkingLotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Add any additional modules you might need here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
