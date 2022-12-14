import React from 'react'
import { Link } from 'react-router-dom'

function Selector() {
    return (
        <div className="waev-mode-selector">
            <Link to="/octa" className="waev-mode-selector-btn waev-btn nes-btn is-primary">Octa</Link>
            <Link to="/lowie" className="waev-mode-selector-btn waev-btn nes-btn is-success">Lowie</Link>
            <Link to="/midie" className="waev-mode-selector-btn waev-btn nes-btn is-warning">Midie</Link>
            <Link to="/highie" className="waev-mode-selector-btn waev-btn nes-btn is-error">Highie</Link>
        </div>
    )
}

export default Selector;