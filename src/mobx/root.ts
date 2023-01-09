import 'reflect-metadata'
import { createContext } from 'react'
import { Home } from './services/home'
import { Login } from './services/login'
import { container } from 'tsyringe'

container.register<Home>(Home, { useClass: Home });
container.register<Login>(Login, { useClass: Login });

class RootStore {
  homeStore;
  loginStore;

  constructor () {
    this.loginStore = container.resolve(Login);
    this.homeStore = container.resolve(Home);
    // this.loginStore = new Login(this.homeStore);
  }
}

export const rootStore = new RootStore();
export const RootContext = createContext<RootStore>(rootStore);

export const useStores = (): RootStore => {
  return rootStore;
}
