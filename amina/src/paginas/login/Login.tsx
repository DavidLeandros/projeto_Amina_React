import React from 'react'
import TextField from '@mui/material/TextField'
import './Login.css'

export default function Login() {
  return (
    <>
      <main id="login">
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </main>
    </>
  )
}
