import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReduxToolsBugComponent } from './redux-tools-bug.component';

const routes: Routes = [
  {
    path: '',
    component: ReduxToolsBugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxToolsBugRoutingModule {}
