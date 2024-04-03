import { Component } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: any[] = [];
  selectedMovie: any = null;

  constructor(private tmdbService: TmdbService) {}

  searchMovies(query: string) {
    this.tmdbService.searchMovies(query)
      .subscribe(
        movies => this.movies = movies,
        error => console.error('Error searching movies:', error)
      );
  }

  selectMovie(movieId: number) {
    this.tmdbService.getMovieDetails(movieId)
      .subscribe(
        movie => this.selectedMovie = movie,
        error => console.error('Error fetching movie details:', error)
      );
  }
}
