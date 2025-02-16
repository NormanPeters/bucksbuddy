import { Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { NewJourneyComponent } from './pages/new-journey/new-journey.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'new-journey', component: NewJourneyComponent },
  { path: 'settings', component: SettingsComponent },
  // Optionally, add a wildcard route for 404s
  { path: '**', redirectTo: '' }
];
