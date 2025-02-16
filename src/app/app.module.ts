import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Import your components here if not using feature modules
import { MainViewComponent } from './pages/main-view/main-view.component';
import { NewJourneyComponent } from './pages/new-journey/new-journey.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent,
    MainViewComponent,
    NewJourneyComponent,
    SettingsComponent
    // sets up routing with your defined routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
