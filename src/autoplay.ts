class AutoplaySingleton {
  public readonly allowed: Promise<void>;

  constructor() {
    this.allowed = Promise.resolve();
  }

  public listen(): void {
    return undefined;
  }
}

export const Autoplay = new AutoplaySingleton();
