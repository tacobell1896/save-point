import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePointNoteComponent } from './save-point-note.component';

describe('SavePointNoteComponent', () => {
  let component: SavePointNoteComponent;
  let fixture: ComponentFixture<SavePointNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePointNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePointNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
