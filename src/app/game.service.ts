import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from './game';
import { GAMES } from './mock-games';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  httpClient: HttpClient; // Fix: Properly type the httpClient property

  constructor(private http: HttpClient, private messageService: MessageService) { // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }
  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    this.messageService.add('GameService: fetched games');
    return games;
  }
  // TODO: Get the game data from the API
  // baseUrl = 'https://api.igdb.com/v4/games';

  // searchGame(term: string): Observable<Game[]> { // Fix: Change the return type to Observable<Game[]>
    // console.log('Searching for game...');
    // return this.httpClient.get<Game[]>(`${this.baseUrl}?search=${term}`);
  // }
}
