import { makeAutoObservable } from 'mobx';
import 'reflect-metadata';
import { injectable } from 'inversify'
import { IHome } from '../interfaces/interfaces'

@injectable()
export class Home implements IHome {
  message: string = 'not logged';

  constructor () {
    makeAutoObservable(this);
  }

  changeMessage = (message: string): void => {
    console.log(message);
    this.message = message
  }
}
