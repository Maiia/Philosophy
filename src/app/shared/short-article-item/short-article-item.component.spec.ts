import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortArticleItemComponent } from './short-article-item.component';

describe('ShortArticleItemComponent', () => {
  let component: ShortArticleItemComponent;
  let fixture: ComponentFixture<ShortArticleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortArticleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
