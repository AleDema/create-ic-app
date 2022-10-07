import React, { useEffect, useState } from "react"
import logo from "../assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as declarations from "../../declarations/backend"
/*
 * Some examples to get you started
 */
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"
import  AuthButton from "./components/AuthButton"

//STATE
import { useSnapshot } from 'valtio'
import state from "./context/global"

//CANISTER
import { backend } from "../../declarations/backend"

//ROUTING
import {Link} from "react-router-dom";

function App() {

  const snap = useSnapshot(state)

  const [count, setCount] = useState<bigint>()

  const refreshCounter = async () => {
    const freshCount = await backend.getValue() as bigint
    setCount(freshCount)
  }

  const increment = async () => {
    //setCount(count++)
    await backend.increment()
    await refreshCounter()
  }

  useEffect(()=> {
    refreshCounter();
  }, [])

  return (
    <>
 <div className="p-6 absolute">
    <AuthButton/>
  </div>
    <div className=" bg-bg-primary antialiased font-sans space-y-4 h-screen w-screen flex items-center justify-center flex-col">
      <ConnectDialog dark={true}/>

      <div>
        <img src={logo} className="App-logo logo h-20" alt="logo" />
      </div>
      <h1 className = "text-5xl">Vite + React + ICP</h1>
      <div className="space-x-4">
        <button className=" bg-btn-primary hover:border-blue-600 text-base cursor-pointer rounded-md border border-transparent border-solid " onClick={() => state.count++}>
          Valtio count is {snap.count}
        </button>
        <button onClick={increment}>
          Canister count is {count?.toString()}
        </button>
        <p className="text-center">
          Edit <code>App.jsx</code> and save to test HMR
        </p>
      </div>

      <Link className = "card" to="/home">Link</Link>

      <div className="examples">
        <Profile />
        <Transfer />
      </div>
    </div>
    </>
   
  )
}


const client = createClient({
  canisters: {
    declarations,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
