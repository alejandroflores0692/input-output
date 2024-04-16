
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  varHijo = "varible hijo";

  @Input() varPadre: string;
  @Input() varPadre2: string; 
  @Output() enviar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  enviarVariable() {
    this.enviar.emit(this.varHijo);
  }

}
