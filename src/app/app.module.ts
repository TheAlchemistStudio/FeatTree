import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { TreeComponent } from './components/tree/tree.component';
import { FeatComponent } from './components/feat/feat.component';
import { FeatCardComponent } from './components/feat-card/feat-card.component';

import { FeatService } from './services/feat.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TreeComponent,
    FeatComponent,
    FeatCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    FeatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
