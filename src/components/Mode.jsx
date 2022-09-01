import React from "react"
import { Link } from "react-router-dom"
import Selector from "./Selector"

function Mode() {
    return (
        <div className="waev-container nes-container with-title is-dark">
            <div className="waev-project-desc title">
                <span className="waev-project-title">Waev</span>
            </div>
            <p className="waev-mode-title">Tienes 4 modos de práctica:</p>
            <ul className="waev-mode-list nes-list">
                <li className="waev-mode-name nes-text">Octa:</li>
                <div className="waev-mode-name-desc"><p>1 octava</p><p>rango completo</p></div>
                <li className="waev-mode-name nes-text">Lowie:</li>
                <div className="waev-mode-name-desc"><p>1/3 octava</p><p>frecuencias bajas</p></div>
                <li className="waev-mode-name nes-text">Midie:</li>
                <div className="waev-mode-name-desc"><p>1/3 octava</p><p>frecuencias medias</p></div>
                <li className="waev-mode-name nes-text">Highie:</li>
                <div className="waev-mode-name-desc"><p>1/3 octava</p><p>frecuencias altas</p></div>
            </ul>
            <div className="waev-mode-selector-container">
                <label className="waev-mode-selector-title">¿Qué frecuencias practicarás?</label>
                <Selector />
            </div>
        </div >
    )
}

export default Mode;