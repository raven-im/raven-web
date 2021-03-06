import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChatModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
