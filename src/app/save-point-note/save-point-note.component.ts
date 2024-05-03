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
    this.messageService.add(`NotesComponent: Selected note id=${note.id}`)
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  addNote() {
  }

  save() {

  }

  delete() {
  }

}
