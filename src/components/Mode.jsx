import React from "react"
import { Link } from "react-router-dom"
import Selector from "./Selector"

function Mode() {
    return (
        <div className="nes-container with-title is-dark">
            <span className="title title-waev"><Link to="/waev">Waev</Link></span>
            <p className="mode-title">Tienes 4 modos de práctica:</p>
            <div className="lists">
                <ul className="nes-list is-circle">
                    <li className="nes-text gameboy-wannabe">Octa:</li><p> 1 octava - rango completo</p>
                    <li className="nes-text gameboy-wannabe">Lowie:</li><p>  1/3 octava - frecuencias bajas</p>
                    <li className="nes-text gameboy-wannabe">Midie:</li><p> 1/3 octava - frecuencias medias</p>
                    <li className="nes-text gameboy-wannabe">Highie:</li><p> 1/3 octava - frecuencias altas</p>
                </ul>
            </div>
            <div className="select_container">
                <label htmlFor="dark_select">¿Qué frecuencias practicarás?</label>
                <Selector />
            </div>
        </div>
    )
}

export default Mode;