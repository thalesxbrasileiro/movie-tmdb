import { Component } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  searchMovies(query: string) {
    this.tmdbService.searchMovies(query)
      .subscribe(
        movies => this.movies = movies,
        error => console.error('Error searching movies:', error)
      );
  }
  
}
