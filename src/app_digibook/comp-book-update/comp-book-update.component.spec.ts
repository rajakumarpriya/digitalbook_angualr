import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBookUpdateComponent } from './comp-book-update.component';

describe('CompBookComponent', () => {
  let component: CompBookUpdateComponent;
  let fixture: ComponentFixture<CompBookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBookUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
