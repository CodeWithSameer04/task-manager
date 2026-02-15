import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './index.css'

function App() {


  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="main">
        <h1>Dashboard</h1>
        <p>Your content goes here.</p>
      </div>
    </>
  )
}

export default App
