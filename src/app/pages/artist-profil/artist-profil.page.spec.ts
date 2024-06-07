import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistProfilPage } from './artist-profil.page';

describe('ArtistProfilPage', () => {
  let component: ArtistProfilPage;
  let fixture: ComponentFixture<ArtistProfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
