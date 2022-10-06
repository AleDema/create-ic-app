import React from 'react'
import "@connect2ic/core/style.css"
import { ConnectButton, ConnectDialog} from "@connect2ic/react"
function AuthButton() {
  return (
    <>        
        <ConnectButton />
        <ConnectDialog />
    </>
  )
}

export default AuthButton