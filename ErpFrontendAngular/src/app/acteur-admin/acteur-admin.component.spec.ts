import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeurAdminComponent } from './acteur-admin.component';

describe('ActeurAdminComponent', () => {
  let component: ActeurAdminComponent;
  let fixture: ComponentFixture<ActeurAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActeurAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActeurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
