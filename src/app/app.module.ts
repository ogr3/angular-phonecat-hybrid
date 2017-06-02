import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckmarkPipe } from '../app-ajs/core';
import { Phone } from '../app-ajs/core/phone';
import { PhoneDetailComponent } from '../app-ajs/phone-detail';
import { PhoneListComponent } from '../app-ajs/phone-list';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents: [
    PhoneListComponent,
    PhoneDetailComponent
  ],
  providers: [
    Phone
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
