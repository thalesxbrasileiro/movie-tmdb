import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TmdbService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKey;
  private language = 'pt-BR';

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number = 1): Observable<any> { // Adicionado parâmetro 'page' com valor padrão 1
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}`; // Adicionado '&page=${page}' à URL

    return this.http.get<any>(url).pipe(
      map(response => response.results),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  getPopularMovies(page: number, itemsPerPage: number): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`;

    return this.http.get<any>(url).pipe(
      map(response => response.results.slice(0, itemsPerPage)),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

}