import React from 'react'
import DenseAppBar from './components/Appbar'
import { Paper } from '@mui/material'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Paper>
        <DenseAppBar />
        <Nav/>
      </Paper>
    </>
  )
}

export default App