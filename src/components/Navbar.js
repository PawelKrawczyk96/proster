import React, {useState} from 'react'
import "./../style.css"
import logo from './../assets/logo.svg'
import navIcon from './../assets/nav-icon.png'

const Navbar = () => {
    const [collapse,setCollapse] = useState(true);
    const collapsing = () =>{
        setCollapse(!collapse)
        console.log(collapse)
    }
    return (
        <div className="container">
            <nav className="main-navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo proster" className="logo"/>
                </div>
                <img src={navIcon} alt="navbar hamburger" className="nav-icon img-fluid" onClick={collapsing} />
                <ul className={`nav-list ${collapse? '' : 'test'}` }>
                    <li className="list-item">
                        <a className="item-link" href='/'>Strona główna</a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href='/oferta/'>Oferta</a>
                    </li>
                    <li className="list-item">
                        <a href="/kariera/" className="item-link">Kariery</a>
                    </li>
                    <li className="list-item">
                        <a className="item-link" href="/kontakt/">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar