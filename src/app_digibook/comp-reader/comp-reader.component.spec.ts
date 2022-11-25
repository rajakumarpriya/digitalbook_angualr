import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompReaderComponent } from './comp-reader.component';

describe('CompReaderComponent', () => {
  let component: CompReaderComponent;
  let fixture: ComponentFixture<CompReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
