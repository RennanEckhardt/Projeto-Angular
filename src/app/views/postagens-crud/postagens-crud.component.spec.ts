import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensCrudComponent } from './postagens-crud.component';

describe('PostagensCrudComponent', () => {
  let component: PostagensCrudComponent;
  let fixture: ComponentFixture<PostagensCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagensCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
