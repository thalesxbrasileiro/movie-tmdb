import { Component, OnInit } from '@angular/core';
import { RegresService } from '../../service/regres.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css'] 
})
export class ContaComponent implements OnInit {

  public name: string = '';
  public email: string = '';
  public password: string = '';

  constructor(private regresService: RegresService) { }

  ngOnInit(): void {
    this.regresService.getUsers().subscribe(
      users => {
        console.log('Usuários obtidos com sucesso:', users);
      },
      error => {
        console.error('Erro ao obter usuários:', error);
      }
    );
  }

  createUser(email: string, password: string) {
    this.regresService.createUser(email, password).subscribe(
      response => {
        console.log('Usuário criado com sucesso:', response);
      },
      error => {
        console.error('Erro ao criar usuário:', error);
      }
    )
  }
  
}
