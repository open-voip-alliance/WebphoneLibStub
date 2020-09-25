import { EventEmitter } from 'events';

class MediaSingleton extends EventEmitter {
  public init() {}

  public requestPermission(): Promise<void> {
    return Promise.resolve();
  }
}

export const Media = new MediaSingleton();
