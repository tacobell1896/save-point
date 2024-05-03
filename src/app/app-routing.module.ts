import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePointNoteComponent } from './save-point-note/save-point-note.component';
import { SavePointGameComponent } from './save-point-game/save-point-game.component';

const routes: Routes = [
  { path: 'notes', component: SavePointNoteComponent },
  { path: 'games', component: SavePointGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
