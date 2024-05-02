import { Component, NgModule, OnInit} from '@angular/core';
import { Note } from '../note';
import {NOTES} from '../mock-notes';
@Component({
  selector: 'app-save-point-note',
  templateUrl: './save-point-note.component.html',
  styleUrls: ['./save-point-note.component.css'],
})


export class SavePointNoteComponent implements OnInit {

  notes = NOTES;
  constructor() { }

  ngOnInit(): void {
  }

  selectedNote?: Note;
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  addNote() {
  }

  save() {

  }

  delete() {
  }

}
