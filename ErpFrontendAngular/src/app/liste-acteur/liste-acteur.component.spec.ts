import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActeurComponent } from './liste-acteur.component';

describe('ListeActeurComponent', () => {
  let component: ListeActeurComponent;
  let fixture: ComponentFixture<ListeActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeActeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
