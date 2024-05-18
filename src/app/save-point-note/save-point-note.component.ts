import { Component, NgModule, OnInit} from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-save-point-note',
  templateUrl: './save-point-note.component.html',
  styleUrls: ['./save-point-note.component.css'],
})


export class SavePointNoteComponent implements OnInit {

  notes: Note[] = [];
  constructor(private noteService: NoteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  selectedNote?: Note;
  onSelect(note: Note): void {
    this.selectedNote = note;
    this.messageService.add(`NotesComponent: Selected note id=${note.savePointNoteId}`)
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  addNote(note: string, savePointGameId: string) {
    // convert the game id to a number
    const gameId = Number(savePointGameId);

    // create a new note object
    const newNote: Note = {
      savePointNoteId: 0, // replace 0 with the appropriate value
      // TODO: Replace the placeholder values with the appropriate values
      noteDate: '2024-05-18',
      note,
      savePointGameId: gameId
    };

    console.log(newNote);

    // push the new note to the API
    this.noteService.addNote(newNote).subscribe(note => this.notes.push(note));
    // this.noteService.addNote(note).subscribe(note => this.notes.push(note));
    console.log("Note Added!");
  }

  save() {

    console.log("Note Saved!");
  }

  delete() {
    console.log("Note Deleted!");
  }

}
