import { Container } from 'inversify'
import { Home } from '../mobx/services/home'
import { Login } from '../mobx/services/login'
import { TYPES } from './types'
import { RootStore } from '../mobx/root'
import { IRootStore } from '../mobx/interfaces/interfaces'
import { createContext } from 'react'

const rootContainer = new Container();
rootContainer.bind(TYPES.IHome).to(Home).inSingletonScope();
rootContainer.bind(TYPES.ILogin).to(Login).inSingletonScope();
rootContainer.bind(TYPES.IRootStore).to(RootStore).inSingletonScope();

export const rootStore = rootContainer.get<IRootStore>(TYPES.IRootStore);
export const RootContext = createContext<IRootStore>(rootStore);

export const useStores = (): IRootStore => {
  return rootStore;
}

export { rootContainer }
