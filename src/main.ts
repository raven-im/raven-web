  import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as protobuf from 'protobufjs/minimal';
import * as Long from 'long';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
protobuf.util.Long = Long;
protobuf.configure();
platformBrowserDynamic().bootstrapModule(AppModule);
