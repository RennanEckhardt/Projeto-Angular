import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensCreateComponent } from './postagens-create.component';

describe('PostagensCreateComponent', () => {
  let component: PostagensCreateComponent;
  let fixture: ComponentFixture<PostagensCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagensCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagensCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
