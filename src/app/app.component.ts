import { Component, OnInit } from '@angular/core';
import { ElementArrayFinder } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }  

  varPadre = "variable padre";
  varPadre2 = "variable padre 2";
  varHijo;
  varHijo2;
  nombre;

  ngOnInit(): void {
    this.funcionesPrincipalesJavaScript();
  }

  obtenerVariableHijo(variableHijo) {
    this.varHijo = variableHijo;
  }

  obtenerNombre(nombre) {
    this.nombre = nombre;
  }

  funcionesPrincipalesJavaScript(){
    let cadena = 'abca';
    let numbers = [2, 4, 8, 16];
    const things = ['dish', 'computer', 'dog'];
    let arreglo = [2,4,6,8,10,12];

    let users = [{
      id: 1,
      name: "Alejandro",
      age: 32,
      color: "azul",
      sex: "male" 
    }, {
      id: 2,
      name: "Oscar",
      age: 33,
      color: "rojo",
      sex: "male" 
    },{
      id: 3,
      name: "Silvia",
      age: 30,
      color: "verde",
      sex: "female" 
    },{
      id: 4,
      name: "Otro",
      age: 31,
      color: "morado",
      sex: "male" 
    },{
      id: 4,
      name: "Otra",
      age: 35,
      color: "rosa",
      sex: "female" 
    }]

    // split()
    // Divide una cadena en un arreglo de subcadenas de la cadena original a partir de un carácter separador
    console.log(cadena.split(""));

    // subtring()
    // Extrae caracteres desde un índice A hasta un índice B sin incluirlo
    console.log(cadena.substring(0,3));

    // trim()
    // Elimina espacios en blanco al inicio y al final de una cadena
    console.log(cadena.trim());

    // map()
    // Crea un arreglo nuevo con los resultados de la función enviada como parámetro
    console.log(numbers.map(function(x) { return x * 10;}));
    console.log(numbers.map((x) => x * 10));

    // push()
    // Agrega elementos al final de un arreglo y regresa la longitud del arreglo con los nuevos elementos
    const count = things.push('bed');
    console.log(things, count);

    // pop()
    // Remueve el último elemento de un arreglo y lo devuelve
    const last = things.pop();
    console.log(things, last);
    
    // forEach

    arreglo.forEach( (item, index) => {
      console.log(item, index); 
    });
    users.find(user => user.id == 2);
    console.log(users); 
     const quokka = {
      isAsome: true
     }
     console.log(quokka);
     
    
    
  
  }
}