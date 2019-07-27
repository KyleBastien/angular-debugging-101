import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompilerBugComponent } from './compiler-bug.component';

const routes: Routes = [
  {
    path: '',
    component: CompilerBugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompilerBugRoutingModule {}
