import { makeAutoObservable } from 'mobx';
import { singleton } from 'tsyringe'

@singleton()
export class Home {
  message: string = 'not logged';

  constructor () {
    makeAutoObservable(this);
  }

  changeMessage = (message: string): void => {
    console.log(message);
    this.message = message
  }
}
