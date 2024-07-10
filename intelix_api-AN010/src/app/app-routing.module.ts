import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntelappComponent } from './pages/intelapp/intelapp.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AreaServidorComponent } from './pages/area-servidor/area-servidor.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent
  },

  {
    path: 'area-servidor',
    title: 'Area Servidor',
    component: AreaServidorComponent

  },
  { path: 'dashboard', 
    component: DashboardComponent },

  {
    path: 'intelapp',
    title: 'IntelApp',
    component: IntelappComponent
  },
  {
    path: '**',
    title: 'Página não encontrada',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
