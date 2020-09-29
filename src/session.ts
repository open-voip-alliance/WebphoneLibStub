import { EventEmitter } from 'events';

export interface ISession {
  readonly id: string;
}

export class SessionImpl extends EventEmitter {
  public readonly isIncoming: boolean;
  public readonly id: string;

  constructor(sessionId: string, isIncoming: boolean) {
    super();
    this.isIncoming = isIncoming;
    this.id = sessionId;
  }
}
