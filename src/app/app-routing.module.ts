import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContaComponent } from './pages/conta/conta.component';
import { FilmeComponent } from './pages/filme/filme.component';
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'filme/:id', component: FilmeComponent },
  { path: 'em-construcao', component: EmConstrucaoComponent },
  { path: 'conta', component: ContaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
