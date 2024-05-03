import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  games: Game[] = [];
  notes: Note[] = [];
  constructor(private gameService: GameService, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getGames();
    this.getNotes();
  }

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

}
