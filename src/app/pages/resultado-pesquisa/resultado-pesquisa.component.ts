import { Component } from '@angular/core';
import { TmdbService } from '../../../service/tmdb.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrl: './resultado-pesquisa.component.css'
})
export class ResultadoPesquisaComponent {
  
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  
}
