import React from 'react'
import "./../style.css"
import logo from './../assets/logo.svg'

const Footer = () => {
    return (
        <div className="container-footer">
            <footer className="footer">
                <div className="footer-desc">
                    <div className="footer-logo">
                        <img src={logo} alt="proster logo" className="logo"></img>
                    </div>
                    <div className="footer-info">
                        <p>
                        Proster to ﬁrma rodzinna specjalizująca się w branżach: elektrotechnika, automatyka & robotyka,
                        mechanika, utrzymanie ruchu, oraz branża OZE, działająca od 1985 roku w przemyśle. 
                        Indywidualne podejście do projektów,  doradztwo techniczne oraz kompleksowa obsługa w zakresie 
                        realizacji instalacji fotowoltaicznych w sektorze Mikro, MŚP i Dużych Przedsiębiorstwach.
                        </p>
                    </div>
                    <div className="footer-nav">
                        <nav className="footer-navbar">
                            <ul className="nav-list">
                                <li className="list-item">
                                    <a href="/" className="item-link">Strona główna</a>
                                </li>
                                <li className="list-item">
                                    <a href="/oferta/" className="item-link">Oferta</a>
                                </li>
                                <li className="list-item">
                                    <a href="/kariera/" className="item-link">Kariery</a>
                                </li>
                                <li className="list-item">
                                    <a href="/kontakt/" className="item-link">Kontakt</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-copy">
                        <p>2021 © Proster Energy - instalacje fotowoltaiczne dla ﬁrm</p>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="contact-address">
                        <p><b>Dane spółki</b></p>
                        <p>Proster Sp z o. o</p>
                        <p>Bartosza Głowackiego 67</p>
                        <p>32-800 Brzesko</p>
                    </div>
                    <div className="contact-info">
                        <p>+(48) 14 68 48 300</p>
                        <p>biuro@proster.net.pl</p>
                    </div>
                    <div className="contact-sites">
                        <p>www.proster.net.pl</p>
                        <p>fb.com/prosterbrzesko</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
