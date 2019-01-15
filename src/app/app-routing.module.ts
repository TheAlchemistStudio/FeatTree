import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeComponent } from './components/tree/tree.component';
import { FeatComponent } from './components/feat/feat.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';

const routes: Routes = [
  {
    path: 'workbench', component: WorkbenchComponent
  },
  {
    path: '', component: TreeComponent
  },
  {
    path: ':default', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'feat/:id', component: FeatComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
