import React from 'react'
import { Link } from 'react-router-dom'

function Selector() {
    return (
        <div className="waev-mode-selector">
            <Link to="/waev/octa" className="waev-mode-selector-btn nes-btn is-primary">Octa</Link>
            <Link to="/waev/lowie" className="waev-mode-selector-btn nes-btn is-success">Lowie</Link>
            <Link to="/waev/midie" className="waev-mode-selector-btn nes-btn is-warning">Midie</Link>
            <Link to="/waev/highie" className="waev-mode-selector-btn nes-btn is-error">Highie</Link>
        </div>
    )
}

export default Selector;