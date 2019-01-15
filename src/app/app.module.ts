import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './components/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TreeComponent } from './components/tree/tree.component';
import { FeatComponent } from './components/feat/feat.component';
import { FeatCardComponent } from './components/feat-card/feat-card.component';
import { FeatCardDetailsComponent } from './components/feat-card-details/feat-card-details.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';

import { FeatService } from './services/feat.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TreeComponent,
    FeatComponent,
    FeatCardComponent,
    FeatCardDetailsComponent,
    WorkbenchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  entryComponents: [
    FeatCardComponent,
    FeatCardDetailsComponent
  ],
  providers: [
    FeatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
