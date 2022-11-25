import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';  csss check
//import { AppModule } from './001_structureproject/app.module'; // structure
///import { AppModule } from './002_components/app.module';  // header footer textbody
//import { AppModule } from './003-parent-child/app.module';  /// aprentr child selector
//import { AppModule } from './004-databinding/app.module'; // databinding
//import { AppModule } from './005-service/app.module';  /// aprentr child selector
//import { AppModule } from './006-directives/app.module';
//import { AppModule } from './007-structural-directives/app.module';
//8 execrcise will do pending
//import { AppModule } from './01_digitalbook copy/app.module'; //login

//import { AppModule } from './01_digitalbook/app.module'; //my file old
//import {AppModule} from './10-routing/app.module';
//006-directives
//import { AppModule } from './digital_app/app.module';

import { AppModule } from './app_digibook/app.module';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
