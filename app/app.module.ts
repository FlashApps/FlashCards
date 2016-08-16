import { AppComponent }       from './app.component';
import { routing,
         appRoutingProviders } from './app.routes';

         import {SearchResultsComponent} from './SearchResults.component';
         import {LandingComponent} from './landing.component';

@NgModule({
  imports: [

    routing
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    SearchResultsComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
