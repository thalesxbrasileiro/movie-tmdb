import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrl: './card-filme.component.css'
})
export class CardFilmeComponent {
  @Input() movie: any;

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
