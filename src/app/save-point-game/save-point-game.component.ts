import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-save-point-game",
  templateUrl: "./save-point-game.component.html",
  styleUrls: ["./save-point-game.component.css"],
})
export class SavePointGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchGame(term: string): void {
    console.log(`Searching for ${term}...`);
    // TODO: Implement the searchGame method in GameService
  }
}
