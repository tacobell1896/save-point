import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-save-point-game',
  templateUrl: './save-point-game.component.html',
  styleUrls: ['./save-point-game.component.css']
})
export class SavePointGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // TODO: Get the game data from the API
  baseUrl = 'https://api.igdb.com/v4/games';

  searchGame(term: string): Observable<Game>[] {
    console.log('Searching for game...');
    return this.httpClient.get<Game[]>(`${this.baseUrl}?search=${term}`);
  }
}
