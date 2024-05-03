import { Component, OnInit } from "@angular/core";
import { Game } from "../game";
import { GameService } from "../game.service";

@Component({
  selector: "app-save-point-game",
  templateUrl: "./save-point-game.component.html",
  styleUrls: ["./save-point-game.component.css"],
})
export class SavePointGameComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames().subscribe((games) => (this.games = games));
  }

  searchGame(term: string): void {
    console.log(`Searching for ${term}...`);
    // TODO: Implement the searchGame method in GameService
    // this.gameService.searchGame(term).then((games) => (this.games = games));
  }
}
