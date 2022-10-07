import React from 'react'

import { useDialog } from "@connect2ic/react"

function AuthButton() {
    const { open, close, isOpen } = useDialog()

  return (
    <button onClick={open}>Connect</button>
  )
}

export default AuthButton