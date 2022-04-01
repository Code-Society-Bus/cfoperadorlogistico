import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { FormsModule } from '@angular/forms';
import { ServiceOneComponent } from './pages/some-services/service-one/service-one.component';
import { ServiceTwoComponent } from './pages/some-services/service-two/service-two.component';
import { ServiceThreComponent } from './pages/some-services/service-thre/service-thre.component';
import { HomeServiceComponent } from './pages/home/home-service/home-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    FleetComponent,
    ContactComponent,
    TrackingComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreComponent,
    HomeServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
