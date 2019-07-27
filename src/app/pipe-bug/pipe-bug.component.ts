import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-bug',
  templateUrl: './pipe-bug.component.html',
  styleUrls: ['./pipe-bug.component.scss']
})
export class PipeBugComponent implements OnInit {
  public starWarsFilms: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.starWarsFilms = this.http.get('https://swapi.co/api/films/');
  }
}
