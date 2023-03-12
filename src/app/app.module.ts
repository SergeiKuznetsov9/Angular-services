import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ServiceIerarcyComponent } from './components/service-ierarcy/service-ierarcy.component';
import { Counter1Component } from './components/service-ierarcy/counter1/counter1.component';
import { Counter2Component } from './components/service-ierarcy/counter2/counter2.component';
import { Counter3Component } from './components/service-ierarcy/counter3/counter3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ServiceIerarcyComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
