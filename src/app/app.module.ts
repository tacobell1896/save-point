import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SavePointNoteComponent } from "./save-point-note/save-point-note.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { SavePointGameComponent } from "./save-point-game/save-point-game.component";
import { HttpClientModule } from "@angular/common/http";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SavePointNoteComponent,
    SavePointGameComponent,
    NoteDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GameDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
