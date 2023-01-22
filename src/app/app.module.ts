import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { TopComponent } from './view-encapsulation/top/top.component';
import { BottomComponent } from './view-encapsulation/bottom/bottom.component';
import { ObservablePromiseComponent } from './observable-promise/observable-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationComponent,
    TopComponent,
    BottomComponent,
    ObservablePromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
