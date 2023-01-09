import { makeAutoObservable, autorun } from 'mobx'
import { inject, injectable, singleton } from 'tsyringe'
import { Home } from './home'

@singleton()
export class Login {
  userName: string = 'Bearer';

  constructor (@inject(Home) private readonly homeStore: Home) {
    makeAutoObservable(this);
    autorun(() => {
      if (this.userName === 'logged user') {
        // homeStore.changeMessage('logged success');
      }
    })
  }

  login = (): void => {
    console.log('logged');
    this.userName = 'logged user';
  }
}
