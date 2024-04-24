
import 'font-awesome/css/font-awesome.css'
import {io} from 'socket.io-client'
import './App.css'
import React from 'react'
import Mains from './components/Mains'

const socket=io("https://chat-server-u5lp.onrender.com/")

function App() {
  
  return (
    <>

   <Mains socket={socket}/>
    
    </>
  )
}

export default App
