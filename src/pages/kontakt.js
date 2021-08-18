import React from 'react'
import Layout from './../components/layout'
import './../kontakt.css'
import email from './../assets/email.png'
import phone from './../assets/phone.png'
import location from './../assets/location.png'
import time from './../assets/time.png'
import prosterMap from './../assets/mapa-proster.png'

const kontakt = () => {
    return (
        <Layout>
            <div className="background-top-kontakt"></div>
            <div className="container">
                <h1 className="contact-us">Skontaktuj się z nami</h1>
                <div className="contact">
                    <div className="contact-info">
                        <div className="info-items">
                            <div className="info-item">
                                <img src={location} alt="location icon"/>
                                <div className="item-text">
                                    <p><b>Adres</b></p>
                                    <p>Proster Sp. z o. o.</p>
                                    <p>Bartosza Głowackiego 67</p>
                                    <p>32-800 Brzesko</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={phone} alt="phone icon" />
                                <div className="item-text">
                                    <p><b>Telefon</b></p>
                                    <p>Biuro Obsługi Klienta</p>
                                    <p>+(48) 14 68 48 300</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={email} alt="email icon" />
                                <div className="item-text">
                                    <p><b>Email</b></p>
                                    <p>biuro@proster.net.pl</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={time}  alt="open time icon"/>
                                <div className="item-text">
                                    <p><b>Godziny Otwarcia</b></p>
                                    <p>pn-pt. 08:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us-info">
                            <p><b>Formularz kontaktowy</b></p>
                            <button className="btn"><a href="https://proster.minicrm.pl/form/show/165c5356f10780be13b427bf6094f690/pl-pl" target="_blank">Skontaktuj się</a></button>
                        </div>
                    </div>
                    <div className="contact-map">
                        <img src={prosterMap} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default kontakt
