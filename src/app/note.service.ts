import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-notes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private messageService: MessageService) { }

  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    this.messageService.add('NoteService: fetched notes');
    return notes;
  }
}
