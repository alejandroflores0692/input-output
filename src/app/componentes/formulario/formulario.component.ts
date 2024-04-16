import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre;
  ciudad;
  personas = [];

  @Output() enviarNombre = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.nombre = "Alejandro";
    this.ciudad = "Tampico";
  }

  agregarPersona() {
    let persona: personaInfo = {
      nombre: this.nombre,
      ciudad: this.ciudad
    }
    this.personas.push(persona);
  }

  mostrarNombre(nombre){
    this.enviarNombre.emit(nombre);
  }
}

interface personaInfo {
  nombre: string;
  ciudad: string;
}
