import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'compiler-bug',
    loadChildren: () =>
      import('./compiler-bug/compiler-bug.module').then(
        mod => mod.CompilerBugModule
      )
  },
  {
    path: 'browser-tools-bug',
    loadChildren: () =>
      import('./browser-tools-bug/browser-tools-bug.module').then(
        mod => mod.BrowserToolsBugModule
      )
  },
  {
    path: 'pipe-bug',
    loadChildren: () =>
      import('./pipe-bug/pipe-bug.module').then(mod => mod.PipeBugModule)
  },
  {
    path: 'redux-tools-bug',
    loadChildren: () =>
      import('./redux-tools-bug/redux-tools-bug.module').then(
        mod => mod.ReduxToolsBugModule
      )
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
