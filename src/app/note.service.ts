import { Observable } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Note } from "./note";
// import { NOTES } from "./mock-notes";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  httpClient: HttpClient; // Fix: Properly type the httpClient property
  private notesUrl = environment.baseUrl + "savepointnotes/"; // Fix: Define the URL to the notes API

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
    // Fix: Inject the HttpClient service
    this.httpClient = http; // Fix: Assign the injected HttpClient service to the httpClient property
  }

  getNotes(): Observable<Note[]> {
    this.messageService.add("NoteService: fetched notes");
    return this.httpClient.get<Note[]>(this.notesUrl);
  }

  // TODO: Add the ability to add a note
  addNote(note: Note): Observable<Note> {
    const notes = this.httpClient.post<Note>(this.notesUrl, note);
    this.messageService.add("NoteService: added note");
    return notes;
  }

  // TODO: Add the ability to save a note
  save(note: Note): Observable<Note> {
    const notes = this.httpClient.put<Note>(this.notesUrl + note.savePointNoteId, note);
    this.messageService.add("NoteService: saved note");
    return notes;
  }

  // TODO: Add the ability to delete a note
  delete(note: Note): Observable<Note> {
    const notes = this.httpClient.delete<Note>(this.notesUrl + note.savePointNoteId);
    this.messageService.add("NoteService: deleted note");
    return notes;
  }
}
