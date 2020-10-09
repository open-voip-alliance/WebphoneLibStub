import { EventEmitter } from 'events';
import { ISession } from './session';
import Publisher from './publisher';

enum ClientStatus {
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  DYING = 'dying', // (once you have a call and connectivity drops, your call is 'dying' for 1 minute)
  RECOVERING = 'recovering',
  DISCONNECTING = 'disconnecting',
  DISCONNECTED = 'disconnected'
}

export class Client extends EventEmitter {
  status: ClientStatus;

  private connected = false;

  public connect(): Promise<boolean> {
    this.updateStatus(ClientStatus.CONNECTED);
    this.connected = true;
    return Promise.resolve(true);
  }

  public disconnect(): Promise<void> {
    this.updateStatus(ClientStatus.DISCONNECTED);
    this.connected = false;
    return Promise.resolve();
  }

  public reconfigure(): Promise<void> {
    this.updateStatus(ClientStatus.CONNECTED);
    return Promise.resolve();
  }

  public subscribe(): Promise<void> {
    return Promise.resolve();
  }

  public unsubscribe(): void {
    return;
  }

  public isConnected(): boolean {
    return this.connected;
  }

  public invite(): Promise<ISession> {
    return;
  }

  public getSessions(): ISession[] {
    return [];
  }

  public createPublisher(): Publisher {
    return new Publisher();
  }

  private updateStatus(status: ClientStatus): void {
    if (this.status === status) {
      return;
    }

    this.status = status;
    this.emit('statusUpdate', status);
  }
}
