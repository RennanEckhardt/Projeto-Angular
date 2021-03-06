import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsCreaterComponent } from './albuns-creater.component';

describe('AlbunsCreaterComponent', () => {
  let component: AlbunsCreaterComponent;
  let fixture: ComponentFixture<AlbunsCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbunsCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
