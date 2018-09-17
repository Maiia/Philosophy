import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArrticleComponent } from './blog-arrticle.component';

describe('BlogArrticleComponent', () => {
  let component: BlogArrticleComponent;
  let fixture: ComponentFixture<BlogArrticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArrticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArrticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
