import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Game } from "./game";
import { GAMES } from "./mock-games";
import { MessageService } from "./message.service";
import igdb from "igdb-api-node";

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // TOOD: Add the client id and client secret to a separate file
  client = igdb(
    '5xhac97vb3xj2bv16snpe2esd3gsyl',
    'tgcxmunmpo31adxq83wx52fyfl9lpn'
  );
  httpClient: HttpClient; // Fix: Properly type the httpClient property

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }
  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    this.messageService.add('GameService: fetched games');
    return games;
  }
  // TODO: Get the game data from the API: https://api.igdb.com/ for more details
  baseUrl = 'https://sf26c3krjh.execute-api.us-west-2.amazonaws.com/production/v4/games';

  async searchGame(term: string): Promise<Observable<Game[]>> {
    // Fix: Change the return type to Observable<Game[]>
    console.log('Searching for game...');
    // TODO: Fix CORS issue by using the IGDB API
    const response = await this.client
      .fields(['name', 'cover'])
      .search(term)
      .request(this.baseUrl);
    console.log(response.data);
    return of(response.data);
  }
}
