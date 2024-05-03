import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Note } from "./note";
import { NOTES } from "./mock-notes";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  httpClient: HttpClient; // Fix: Properly type the httpClient property
  constructor(
    private messageService: MessageService,
    http: HttpClient,
  ) {
    // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }

  //TODO: Get the note data from the SavePoint API
  getNotes(): Observable<Note[]> {
    const notes = of(NOTES);
    this.messageService.add("NoteService: fetched notes");
    return notes;
  }

  addNote(note: Note): Observable<Note> {
    this.messageService.add("NoteService: added note");
    return of(note);
  }
}
