import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  @Input() game?: Game;
  constructor(private gameSevice: GameService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.game) {
      this.gameSevice.saveGame(this.game)
        .subscribe(() => console.log("Game saved"));
    }
  }

  delete(): void {
    if (this.game) {
      this.gameSevice.deleteGame(this.game)
        .subscribe(() => console.log("Game deleted"));
    }
  }

}
