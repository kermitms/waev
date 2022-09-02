import React from "react"
import { Route, Routes } from "react-router-dom"
import Mode from "./components/Mode"
import Octa from "./components/Octa"
import Lowie from "./components/Lowie"
import Midie from "./components/Midie"
import Highie from "./components/Highie"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< Mode />}></Route>
        <Route path='/octa' element={< Octa />}></Route>
        <Route path='/lowie' element={< Lowie />}></Route>
        <Route path='/midie' element={< Midie />}></Route>
        <Route path='/highie' element={< Highie />}></Route>
      </Routes>
    </div>
  )
}

export default App;