import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = ''; 

  constructor(private tmdbService: TmdbService) {}

  searchMovies(query: string) {
    this.searchQuery = query; 
    this.tmdbService.searchMovies(query).subscribe({
      next: movies => this.movies = movies,
      error: error => console.error('Erro ao pesquisar filmes:', error)
    });
  }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe({
      next: movies => this.movies = movies,
      error: error => console.error('Erro ao carregar filmes populares:', error)
    });
  }
}