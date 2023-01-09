import { createContext } from 'react'
import 'reflect-metadata';
import { rootContainer } from '../inversify/inversify.config'
import type { IHome, ILogin, IRootStore } from './interfaces/interfaces'
import { TYPES } from '../inversify/types'
import { inject, injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'

@injectable()
export class RootStore implements IRootStore {
  constructor (@inject(TYPES.IHome) public readonly homeStore: IHome, @inject(TYPES.ILogin) public readonly loginStore: ILogin) {
    makeAutoObservable(this);
  }
}
