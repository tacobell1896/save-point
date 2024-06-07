import { Component, OnInit } from "@angular/core";
import { Game } from "../game";
import { GameService } from "../game.service";
import { get } from "http";

@Component({
  selector: "app-save-point-game",
  templateUrl: "./save-point-game.component.html",
  styleUrls: ["./save-point-game.component.css"],
})
export class SavePointGameComponent implements OnInit {
  games: Game[] = [];
  constructor(private gameService: GameService) {}

  selectedGame?: Game;
  onSelect(game: Game): void {
    this.selectedGame = game;
  }
  async searchGame(term: string): Promise<void> {
    console.log(`Searching for ${term}...`);
    // TODO: Implement the searchGame method in GameService
    // this.gameService.searchGame(term).then((games) => (this.games = games));
  }

  getGames(): void {
    this.gameService.getGames().subscribe((games) => (this.games = games));
  }

  addGame(gameName: string, gameDescription: string): void {
    const newGame: Game = {
      savePointGameId: 0,
      gameName,
      gameDescription,
    };

    console.log(newGame);

    this.gameService.addGame(newGame).subscribe((game) => this.games.push(game));
    console.log("Game Added!");
  }

  ngOnInit(): void {
    // Add your initialization logic here
    this.getGames();
  }

}
