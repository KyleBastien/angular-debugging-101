import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compiler-bug',
  templateUrl: './compiler-bug.component.html',
  styleUrls: ['./compiler-bug.component.scss']
})
export class CompilerBugComponent implements OnInit {
  public womenToDisplay = [
    {
      name: 'Ada Lovelace'
    },
    {
      name: 'Grace Hopper'
    },
    {
      name: 'Adele Goldberg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
