export interface IRootStore {
  homeStore: IHome
  loginStore: ILogin
}

export interface IHome {
  message: string
  changeMessage: (message: string) => void
}

export interface ILogin {
  userName: string
  login: () => void
}
