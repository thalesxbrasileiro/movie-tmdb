import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FilmeComponent } from './pages/filme/filme.component';
import { ResultadoPesquisaComponent } from './pages/resultado-pesquisa/resultado-pesquisa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: ResultadoPesquisaComponent }, 
    { path: 'filme/:id', component: FilmeComponent }
  ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
