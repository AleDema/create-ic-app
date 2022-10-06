import React from "react"
import logo from "./assets/dfinity.svg"
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
import * as backend from "../../.dfx/local/canisters/backend"
/*
 * Some examples to get you started
 */
import { Counter } from "./components/Counter"
import { Transfer } from "./components/Transfer"
import { Profile } from "./components/Profile"

//STATE
import { useSnapshot } from 'valtio'
import state from "./context/global"


//ROUTING
import {Link} from "react-router-dom";

function App() {

  const snap = useSnapshot(state)
  //backend.greet("hello")
  return (
    <div className="App">
      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="slogan">
          React+TypeScript Template
        </p>
      </header>

      <Link to="/home">Home</Link>
      {snap.count}

      <div className="examples">
        <Counter />
        <Profile />
        <Transfer />
      </div>
    </div>
  )
}

const client = createClient({
  canisters: {
    backend,
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
