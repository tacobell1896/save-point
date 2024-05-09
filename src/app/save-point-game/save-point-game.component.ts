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

  async searchGame(term: string): Promise<void> {
    console.log(`Searching for ${term}...`);
    (await this.gameService.searchGame(term)).subscribe((games) => (this.games = games));
    console.log(this.games);
    // TODO: Implement the searchGame method in GameService
    // this.gameService.searchGame(term).then((games) => (this.games = games));
  }

  ngOnInit(): void {
    // Add your initialization logic here
  }
}
