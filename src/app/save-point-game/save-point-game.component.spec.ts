import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePointGameComponent } from './save-point-game.component';

describe('SavePointGameComponent', () => {
  let component: SavePointGameComponent;
  let fixture: ComponentFixture<SavePointGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePointGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePointGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
