import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../service/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  popularMovies: any[] = [];
  searchResults: any[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchClicked = false;
  searchPage: number = 1;

  constructor(private tmdbService: TmdbService) { }

  searchMovies(query: string, page: number = 1) {
    this.searchClicked = true;
    this.searchQuery = query;
    this.searchPage = page;
    this.tmdbService.searchMovies(query, page).subscribe({
      next: movies => this.searchResults = movies,
      error: error => console.error('Erro ao pesquisar filmes:', error)
    });
  }

  ngOnInit(): void {
    this.getPopularMovies(this.currentPage, this.itemsPerPage);
  }

  getPopularMovies(page: number, itemsPerPage: number) {
    this.tmdbService.getPopularMovies(page, itemsPerPage).subscribe({
      next: movies => this.popularMovies = movies,
      error: error => console.error('Erro ao carregar filmes populares:', error)
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPopularMovies(this.currentPage, this.itemsPerPage);
    }
  }

  nextPage() {
    this.currentPage++;
    this.getPopularMovies(this.currentPage, this.itemsPerPage);
  }
}