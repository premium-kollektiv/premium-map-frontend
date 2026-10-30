import { enableProdMode, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withXhr, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { SearchService } from './app/search.service';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    importProvidersFrom(AppRoutingModule),
    SearchService,
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
})
  .catch(err => console.error(err));
