import { Routes, RouterModule } from '@angular/router';

import {SearchResultsComponent} from './SearchResults.component';
import {LandingComponent} from './landing.component';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'search',
    component: SearchResultsComponent,
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
