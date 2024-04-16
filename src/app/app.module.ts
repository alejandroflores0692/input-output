import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ManejoDeServiciosComponent } from './componentes/manejo-de-servicios/manejo-de-servicios.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    FormularioComponent,
    ManejoDeServiciosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
