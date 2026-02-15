import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './index.css'

function App() {


  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="main">
        <Dashboard />
      </div>
    </>
  )
}

export default App
