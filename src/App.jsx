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
        <Route exact path='/waev' element={< Mode />}></Route>
        <Route exact path='/waev/octa' element={< Octa />}></Route>
        <Route exact path='/waev/lowie' element={< Lowie />}></Route>
        <Route exact path='/waev/midie' element={< Midie />}></Route>
        <Route exact path='/waev/highie' element={< Highie />}></Route>
      </Routes>
    </div>
  )
}

export default App;