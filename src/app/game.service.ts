import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Game } from "./game";
// import { GAMES } from "./mock-games";
import { MessageService } from "./message.service";
import igdb from "igdb-api-node";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // TOOD: Add the client id and client secret to a separate file
  httpClient: HttpClient; // Fix: Properly type the httpClient property

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) {
    // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }
  // TODO: Get the game data from the API: https://api.igdb.com/ for more details
  // baseUrl = 'https://sf26c3krjh.execute-api.us-west-2.amazonaws.com/production/v4/games';
  baseUrl = environment.baseUrl + 'savepointgames/';

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl, game);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.put<Game>(this.baseUrl + game.savePointGameId, game);
  }

  deleteGame(game: Game): Observable<Game> {
    return this.http.delete<Game>(this.baseUrl + game.savePointGameId);
  }

  // async searchGame(term: string): Promise<Observable<Game[]>> {
    // // Fix: Change the return type to Observable<Game[]>
    // console.log('Searching for game...');
    // // TODO: Fix CORS issue by using the IGDB API
    // const response = await this.client
      // .fields(['name', 'cover'])
      // .search(term)
      // .request(this.baseUrl);
    // console.log(response.data);
    // return of(response.data);
  // }
}
