import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../service/tmdb.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.css'
})
export class FilmeComponent implements OnInit {
Object: any;
$last: any;

  constructor(private route: ActivatedRoute, private servico: TmdbService) {}

  id = "";
  resultado: any;

  ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      console.log(this.id);
      this.servico.getMovieDetails(Number(this.id)).subscribe(filme => {
      this.resultado = filme;
      console.log(this.resultado);
      });
  }

}
