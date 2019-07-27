import { Component, OnInit } from '@angular/core';

interface ICounterObject {
  counter: number;
}

@Component({
  selector: 'app-browser-tools-bug',
  templateUrl: './browser-tools-bug.component.html',
  styleUrls: ['./browser-tools-bug.component.scss']
})
export class BrowserToolsBugComponent implements OnInit {
  public counterObject: ICounterObject = {
    counter: 0
  };

  constructor() {}

  ngOnInit() {}

  public onIncrementClick() {
    this.counterObject.counter++;
  }
}
