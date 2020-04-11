import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
