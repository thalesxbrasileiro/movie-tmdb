import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  
  private apiKey = 'e29649a70cf989a53de3b7b7d45aa2c8';

  constructor(private http: HttpClient) { } 

  searchMovies(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;

    return this.http.get<any>(url).pipe(
      map(response => response.results),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;

    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

}