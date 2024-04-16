import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages = [];

  add(message){
    this.messages.push(message);
  }
}
