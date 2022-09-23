import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantTireComponent } from './postulant-tire.component';

describe('PostulantTireComponent', () => {
  let component: PostulantTireComponent;
  let fixture: ComponentFixture<PostulantTireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulantTireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulantTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
