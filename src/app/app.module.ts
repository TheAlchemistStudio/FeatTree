import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './components/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { TreeComponent } from './components/tree/tree.component';
import { FeatComponent } from './components/feat/feat.component';
import { FeatCardComponent } from './components/feat-card/feat-card.component';
import { FeatCardDetailsComponent } from './components/feat-card-details/feat-card-details.component';

import { FeatService } from './services/feat.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TreeComponent,
    FeatComponent,
    FeatCardComponent,
    FeatCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule
  ],
  entryComponents: [
    FeatCardDetailsComponent
  ],
  providers: [
    FeatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
