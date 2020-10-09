interface IRequest {
  callId: string;
}

export default class Publisher {
  public receiveResponse: (string) => string;
  public request: IRequest;

  constructor() {
    this.receiveResponse = response => response;
    this.request = {
      callId: 'fake-call-id'
    };
  }

  publish(): undefined {
    return undefined;
  }

  unpublish(): undefined {
    return undefined;
  }
}
