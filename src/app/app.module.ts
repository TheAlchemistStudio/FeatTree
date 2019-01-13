import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './components/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TreeComponent } from './components/tree/tree.component';
import { FeatComponent } from './components/feat/feat.component';
import { FeatCardComponent } from './components/feat-card/feat-card.component';
import { FeatCardDetailsComponent } from './components/feat-card-details/feat-card-details.component';
<<<<<<< HEAD
=======
import { TextInformationComponent } from './components/text-information/text-information.component';
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55

import { FeatService } from './services/feat.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TreeComponent,
    FeatComponent,
    FeatCardComponent,
<<<<<<< HEAD
    FeatCardDetailsComponent
=======
    FeatCardDetailsComponent,
    TextInformationComponent
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HttpClientModule,
  ],
  entryComponents: [
    FeatCardComponent,
=======
  ],
  entryComponents: [
>>>>>>> b2ca3970296d89954a16ba702b9e9fbbac0e3d55
    FeatCardDetailsComponent
  ],
  providers: [
    FeatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
