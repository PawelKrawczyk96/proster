import React from 'react'
import Layout from './../components/layout'
import energyIcon from './../assets/energy-icon.png'
import expImage from './../assets/experience_img.png'
import signIcon from './../assets/sign.png'
import projectIcon from './../assets/projekt.png'
import invoiceIcon from './../assets/faktura.png'
import moneyIcon from './../assets/finansowanie.png'
import installationIcon from './../assets/montaz.png'
import meterIcon from './../assets/licznik.png'
import startIcon from './../assets/uruchomienie.png'


const index = () => {
  return (
    <div>
      <Layout>
        <div className="header-bg">
          <div className="container">
            <div className="header-info">
              <h1><span>Inwestycja</span> w przyszłość Twojej firmy</h1>
              <p>Indywidualne podejście do projektów, doradztwo techniczne oraz kompleksowa obsługa w zakresie realizacji instalacji fotowoltaicznych w sektorze Mikro, MŚP i Dużych Przedsiębiorstwach.</p>
              <div className="info-btns">
                <button className="btn btn-offer"><a href="/oferta/">Zobacz ofertę</a></button>
                <button className="btn"><a href="/kontakt/">Skontaktuj się z nami</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <section className="entry-info">
            <img src={energyIcon} alt="energy icon" />
            <div className="info-des">
              <h2>Wytwarzaj prąd z instalacji fotowoltaicznej i zacznij oszczędzać</h2>
              <p>Fotowoltaika ochroni twój biznes przed ciągłymi podwyżkami cen prądu i dodatkowo uczyni go odpowiedzialnym ekologicznie. Dzięki darmowej energii ze słońca uczynisz biznes bardziej rentownym oraz wyprzedzisz konkurencję.</p>
            </div>
          </section>
        </div>
        <div className="experience-cont">
          <div className="container">
            <div className="experience">
              <div className="experience-info">
                <h3>35 lat doświadczenia w ponad 5000 zrealizowanych projektach na świecie.</h3>
                <p>Od 1985 roku nieprzerwanie działamy w przemyśle specjalizując się w branżach elektrotechniki, mechaniki, utrzymania ruchu oraz OZE. Realizowaliśmy projekty dla wielu firm na całym świecie.      </p>
                <button className="btn"><a href="/kontakt/">Skontaktuj się z nami</a></button>
              </div>
              <div className="experience-img">
                <img src={expImage} alt="experience icon" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default index

