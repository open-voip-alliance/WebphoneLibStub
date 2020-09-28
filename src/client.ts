import { EventEmitter } from 'events';

enum ClientStatus {
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  DYING = 'dying', // (once you have a call and connectivity drops, your call is 'dying' for 1 minute)
  RECOVERING = 'recovering',
  DISCONNECTING = 'disconnecting',
  DISCONNECTED = 'disconnected'
}

export class Client extends EventEmitter {
  //   constructor(uaFactory, transportFactory, options) {
  //     super();
  //     this.status;
  //   }
  status: ClientStatus;

  public connect(): Promise<boolean> {
    this.updateStatus(ClientStatus.CONNECTED);
    return Promise.resolve(true);
  }

  public disconnect(): Promise<void> {
    this.updateStatus(ClientStatus.DISCONNECTED);
    return Promise.resolve();
  }

  public reconfigure(): Promise<void> {
    this.updateStatus(ClientStatus.CONNECTED);
    return Promise.resolve();
  }

  private updateStatus(status: ClientStatus): void {
    if (this.status === status) {
      return;
    }

    this.status = status;
    this.emit('statusUpdate', status);
  }
}
