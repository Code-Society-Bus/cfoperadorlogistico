import { ServiceThreComponent } from './pages/some-services/service-thre/service-thre.component';
import { ServiceTwoComponent } from './pages/some-services/service-two/service-two.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { ServiceOneComponent } from './pages/some-services/service-one/service-one.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'fleet',
    component: FleetComponent,
  },
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  {
    path: 'service1',
    component: ServiceOneComponent,
  },
  {
    path: 'service2',
    component: ServiceTwoComponent,
  },
  {
    path: 'service3',
    component: ServiceThreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
