import React from 'react'
import './App.css'
import logo from './logo.svg'
import { RootContext, rootStore, useStores } from './mobx/root'
import { observer } from 'mobx-react-lite'

const App = (): JSX.Element => {
  return (
    <RootContext.Provider value={rootStore}>
      <IndexPage/>
    </RootContext.Provider>
  )
}

export default App

const IndexPage = observer((): JSX.Element => {
  const { homeStore, loginStore } = useStores();

  return (
    <div className={'container flex items-center justify-center mx-auto'}>
      <span className={'font-mono'}>{homeStore.message}</span>
      <button onClick={loginStore.login}>login</button>
    </div>
  )
})
