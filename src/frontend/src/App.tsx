import React, { useEffect, useState } from "react"
import logo from "../assets/dfinity.svg"
import reactLogo from './assets/react.svg'
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
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
    await backend.increment()
    await refreshCounter()
  }

  useEffect(()=> {
    refreshCounter();
  }, [])

  return (
    <div className="App">

      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <div>
        <img src={logo} className="App-logo logo react" alt="logo" />
      </div>
      <h1>Vite + React + ICP</h1>
      <div className="card">
        <button onClick={() => state.count++}>
          Valtio count is {snap.count}
        </button>
        <button onClick={increment}>
          Canister count is {count?.toString()}
        </button>
        <p>
          Edit <code>App.jsx</code> and save to test HMR
        </p>
      </div>

      <Link className = "card" to="/home">Link</Link>

      <div className="examples">
        <Profile />
        <Transfer />
      </div>
    </div>
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
