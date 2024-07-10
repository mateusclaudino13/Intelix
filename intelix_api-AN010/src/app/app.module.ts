import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IntelappComponent } from './pages/intelapp/intelapp.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsDepoimentosComponent } from './components/cards-depoimentos/cards-depoimentos.component';
import { CardsArtigosComponent } from './components/cards-artigos/cards-artigos.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { HeaderComponent } from './components/header/header.component';
import { IntelixComponent } from './components/intelix/intelix.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { CriadoresComponent } from './components/criadores/criadores.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { EndpageComponent } from './components/endpage/endpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaServidorComponent } from './pages/area-servidor/area-servidor.component';
import { IntelixCardComponent } from './components/intelix-card/intelix-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntelappComponent,
    PagenotfoundComponent,
    FooterComponent,
    CardsDepoimentosComponent,
    CardsArtigosComponent,
    SobreNosComponent,
    HeaderComponent,
    IntelixComponent,
    ExperienciaComponent,
    CriadoresComponent,
    EndpageComponent,
    AreaServidorComponent,
    IntelixCardComponent,
    LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
