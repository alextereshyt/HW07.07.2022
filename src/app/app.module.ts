import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddlePanelComponent } from './middle-panel/middle-panel.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { DirectiveExComponent } from './directive-ex/directive-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddlePanelComponent,
    LeftPanelComponent,
    RightPanelComponent,
    DirectiveExComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
