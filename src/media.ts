import { EventEmitter } from 'events';

class MediaSingleton extends EventEmitter {
  public init() {
    return undefined;
  }

  public requestPermission(): Promise<void> {
    return Promise.resolve();
  }
}

export const Media = new MediaSingleton();
