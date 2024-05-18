import { Component, OnInit, Input} from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})

export class NoteDetailComponent implements OnInit {

  @Input() note?: Note;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
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
