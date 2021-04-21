import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemsComponent } from './delete-items.component';

describe('DeleteItemsComponent', () => {
  let component: DeleteItemsComponent;
  let fixture: ComponentFixture<DeleteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
