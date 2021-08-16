import React from 'react'
import Layout from './../components/layout'
import './../kontakt.css'
import email from './../assets/email.png'
import phone from './../assets/phone.png'
import location from './../assets/location.png'
import time from './../assets/time.png'

const kontakt = () => {
    return (
        <Layout>
            <div className="background-top-kontakt"></div>
            <div className="container">
                <h1>Skontaktuj się z nami</h1>
                <div className="contact">
                    <div className="contact-info">
                        <div className="info-items">
                            <div className="info-item">
                                <img src={location} alt="location icon"/>
                                <div className="item-text">
                                    <p>Adres</p>
                                    <p>Proster Sp. z o. o.</p>
                                    <p>Bartosza Głowackiego 67</p>
                                    <p>32-800 Brzesko</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={phone} alt="phone icon" />
                                <div className="item-text">
                                    <p>Telefon</p>
                                    <p>Biuro Obsługi Klienta</p>
                                    <p>+(48) 14 68 48 300</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={email} alt="email icon" />
                                <div className="item-text">
                                    <p>Email</p>
                                    <p>biuro@proster.net.pl</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <img src={time}  alt="open time icon"/>
                                <div className="item-text">
                                    <p>Godziny Otwarcia</p>
                                    <p>pn-pt. 08:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <textarea></textarea>
                            <input type="submit" value="wyślij" />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default kontakt
