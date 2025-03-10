import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../service/tmdb.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.css'
})
export class FilmeComponent implements OnInit {

  Object: any;
  $last: any;

  constructor(private route: ActivatedRoute, private servico: TmdbService, public dialog: MatDialog) { }

  id = "";
  resultado: any;
  trailer: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    // console.log(this.id);
    this.servico.getMovieDetails(Number(this.id)).subscribe(filme => {
      this.resultado = filme;
      // console.log(this.resultado);
    });

    this.servico.getTrailer(Number(this.id)).subscribe(trailer => {
      this.trailer = trailer;
      //console.log('Key do trailer: '+ this.trailer);
    });
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

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {trailerKey: this.trailer}
    });
  }

}
