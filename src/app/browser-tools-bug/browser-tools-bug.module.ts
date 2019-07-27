import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserToolsBugRoutingModule } from './browser-tools-bug-routing.module';
import { BrowserToolsBugComponent } from './browser-tools-bug.component';

@NgModule({
  imports: [CommonModule, BrowserToolsBugRoutingModule],
  declarations: [BrowserToolsBugComponent]
})
export class BrowserToolsBugModule {}
