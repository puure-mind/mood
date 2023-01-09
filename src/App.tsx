import React from 'react'
import './App.css'
import { observer } from 'mobx-react-lite'
import { RootContext, rootStore, useStores } from './inversify/inversify.config'

const App = (): JSX.Element => {
  const root = rootStore;
  return (
    <RootContext.Provider value={ root }>
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
