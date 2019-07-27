import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserToolsBugComponent } from './browser-tools-bug.component';

const routes: Routes = [
  {
    path: '',
    component: BrowserToolsBugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserToolsBugRoutingModule {}
