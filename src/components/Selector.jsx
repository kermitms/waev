import React from 'react'
import { Link } from 'react-router-dom'

function Selector() {
    return (
        <div className="selector-btns">
            <Link to="/waev/octa" className="nes-btn btn mode-selector is-primary">Octa</Link>
            <Link to="/waev/lowie" className="nes-btn btn mode-selector is-success">Lowie</Link>
            <Link to="/waev/midie" className="nes-btn btn mode-selector is-warning">Midie</Link>
            <Link to="/waev/highie" className="nes-btn btn mode-selector is-error">Highie</Link>
        </div>
    )
}

export default Selector;