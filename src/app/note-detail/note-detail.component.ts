import { Component, OnInit, Input} from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Game } from '../game';
import { GameService } from '../game.service';
import { get } from 'http';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})

export class NoteDetailComponent implements OnInit {

  @Input() note?: Note;
  @Input() games: Game[] = [];
  constructor(private noteService: NoteService, private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }
  save(): void {
    if (this.note) {
      this.noteService.save(this.note)
        .subscribe(() => console.log("Note saved"));
    }
  }

  delete(): void {
    if (this.note) {
      this.noteService.delete(this.note)
        .subscribe(() => console.log("Note deleted"));
    }
  }

}
