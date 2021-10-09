import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { RightSideComponent } from './right-side/right-side.component';
import { TabComponent } from './right-side/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    RightSideComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
