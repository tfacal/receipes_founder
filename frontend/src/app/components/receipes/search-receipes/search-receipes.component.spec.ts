import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReceipesComponent } from './search-receipes.component';

describe('SearchReceipesComponent', () => {
  let component: SearchReceipesComponent;
  let fixture: ComponentFixture<SearchReceipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReceipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReceipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
