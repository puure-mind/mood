import { inject, injectable } from 'inversify';
import { autorun, makeAutoObservable } from 'mobx';
import 'reflect-metadata';
import type { IHome, ILogin } from '../interfaces/interfaces'

@injectable()
export class Login implements ILogin {
  userName: string = 'Bearer';

  constructor (
    @inject(Symbol.for('IHome')) private readonly homeStore: IHome
  ) {
    makeAutoObservable(this);
    autorun(() => {
      if (this.userName === 'logged user' && homeStore !== undefined) {
        homeStore.changeMessage('logged success');
      }
    });
  }

  login = (): void => {
    console.log('logged');
    this.userName = 'logged user';
  };
}
