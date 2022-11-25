import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAuthorComponent } from './comp-author.component';

describe('CompAuthorComponent', () => {
  let component: CompAuthorComponent;
  let fixture: ComponentFixture<CompAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
