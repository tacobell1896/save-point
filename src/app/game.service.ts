import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Game } from "./game";
import { GAMES } from "./mock-games";
import { MessageService } from "./message.service";
import igdb from "igdb-api-node";

@Injectable({
  providedIn: "root",
})
export class GameService {
  client = igdb("CLIENT_ID", "ACCESS_TOKEN");
  httpClient: HttpClient; // Fix: Properly type the httpClient property

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {
    // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }
  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    this.messageService.add("GameService: fetched games");
    return games;
  }
  // TODO: Get the game data from the API: https://api.igdb.com/ for more details
  baseUrl = "https://api.igdb.com/v4/games";

  /* async searchGame(term: string): Promise<Observable<Game[]>> {
    // Fix: Change the return type to Observable<Game[]>
    console.log("Searching for game...");
    const response = await igdb()
      .fields(["name", "cover"])
      .search(term)
      .request(this.baseUrl);
    console.log(response.data);
    return of(GAMES);
  }*/
}
