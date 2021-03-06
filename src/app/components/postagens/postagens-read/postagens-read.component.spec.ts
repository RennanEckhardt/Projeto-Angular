import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensReadComponent } from './postagens-read.component';

describe('PostagensReadComponent', () => {
  let component: PostagensReadComponent;
  let fixture: ComponentFixture<PostagensReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagensReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
