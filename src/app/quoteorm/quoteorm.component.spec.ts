import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteormComponent } from './quoteorm.component';

describe('QuoteormComponent', () => {
  let component: QuoteormComponent;
  let fixture: ComponentFixture<QuoteormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
