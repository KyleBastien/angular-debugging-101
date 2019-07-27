import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeBugRoutingModule } from './pipe-bug-routing.module';
import { PipeBugComponent } from './pipe-bug.component';

@NgModule({
  imports: [CommonModule, PipeBugRoutingModule],
  declarations: [PipeBugComponent]
})
export class PipeBugModule {}
