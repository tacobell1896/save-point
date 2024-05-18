import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePointNoteComponent } from './save-point-note/save-point-note.component';
import { SavePointGameComponent } from './save-point-game/save-point-game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notes', component: SavePointNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent},
  { path: 'games', component: SavePointGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
