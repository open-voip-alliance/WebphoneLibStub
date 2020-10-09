export default class Publisher {
  public receiveResponse: (string) => string;

  constructor() {
    this.receiveResponse = response => response;
  }

  publish(): undefined {
    return undefined;
  }

  unpublish(): undefined {
    return undefined;
  }
}
