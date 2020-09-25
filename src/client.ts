import { EventEmitter } from 'events';

export class Client extends EventEmitter {
  //   constructor(uaFactory, transportFactory, options) {

  //   }

  sayHello() {
    this.emit('amoi-eem');
  }
}
