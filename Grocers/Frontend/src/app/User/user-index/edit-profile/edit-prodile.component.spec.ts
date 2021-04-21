import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdileComponent } from './edit-prodile.component';

describe('EditProdileComponent', () => {
  let component: EditProdileComponent;
  let fixture: ComponentFixture<EditProdileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
