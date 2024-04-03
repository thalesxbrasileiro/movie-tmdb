import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = 'e29649a70cf989a53de3b7b7d45aa2c8';

  constructor() { }

  searchMovies(query: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    return new Observable(observer => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data.results);
          observer.complete();
        })
        .catch(error => {
          console.error('Error:', error);
          observer.error(error);
        });
    });
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return new Observable(observer => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          console.error('Error:', error);
          observer.error(error);
        });
    });
  }
}
