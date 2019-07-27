import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilerBugRoutingModule } from './compiler-bug-routing.module';
import { CompilerBugComponent } from './compiler-bug.component';

@NgModule({
  imports: [CommonModule, CompilerBugRoutingModule],
  declarations: [CompilerBugComponent]
})
export class CompilerBugModule {}
