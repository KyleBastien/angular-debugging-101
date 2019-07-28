import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxToolsBugRoutingModule } from './redux-tools-bug-routing.module';
import { ReduxToolsBugComponent } from './redux-tools-bug.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReduxToolsBugRoutingModule],
  declarations: [ReduxToolsBugComponent]
})
export class ReduxToolsBugModule {}
