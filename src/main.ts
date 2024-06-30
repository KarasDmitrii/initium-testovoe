import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, { //Bootstraping Standalone
providers:[
  provideAnimations(),
],  
})