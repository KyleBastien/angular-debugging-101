import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeBugComponent } from './pipe-bug.component';

const routes: Routes = [
  {
    path: '',
    component: PipeBugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeBugRoutingModule {}
