import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'manejo-de-servicios',
  templateUrl: './manejo-de-servicios.component.html',
  styleUrls: ['./manejo-de-servicios.component.css']
})
export class ManejoDeServiciosComponent implements OnInit {

  mensaje;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  agregarMensaje() {
    this.messageService.add(this.mensaje);
  }

}
