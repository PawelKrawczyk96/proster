import React from 'react'
import Layout from './../components/layout'
import './../oferta.css'
import infoImage from './../assets/info-img.png'
import aboutImage from './../assets/about-img.png'

const oferta = () => {
    return (
        <>
        <Layout>
            <div className="background-top-oferta"></div>
            <div className="container">
                <div className="main-article">
                    <div className="main-article-header">
                        <h2><span>Fotowoltaika</span> - kompletne rozwiązania dla firm </h2>
                        <p>Indywidualne podejście do projektów, doradztwo techniczne oraz kompleksowa obsługa w zakresie realizacjiinstalacji fotowoltaicznych w sektorze Mikro, MŚP i Dużych Przedsiębiorstwach.</p>
                    </div>
                    <div className="main-article-info">
                        <div className="info-image">
                            <img src={infoImage} alt="working on roof"></img>
                        </div>
                        <div className="info-text">
                            <h3>Szukasz oszczędności? Zacznij wytwarzać własny prąd z instalacji fotowoltaicznej.</h3>
                            <p>Własna produkcja prądu pozwoli Ci uniezależnić się od podwyżek cen prądu i cieszyć z darmowej energii. Wyprodukowaną energię elektryczna 
                                w Twojej firmie w łatwy sposób możesz zamienić na energie cieplną 
                                zasilając: grzałki elektryczne, pompy ciepła, klimatyzatory, piece 
                                elektryczne, maszyny produkcyjne  i inne urządzenia działające na prąd które pomogą obniżyć koszty Twojej firmy.
                            </p>
                            <p>Od teraz przedsiębiorcy w Polsce mogą korzystać z gromadzenia energii 
                                w sieci i z rocznego bilansowania energii z zakładem energetycznym jako 
                                prosument!
                            </p>
                            <p>Pozwoli Ci to na gromadzenie nadmiaru wyprodukowanej energii przez Twoją instalacje w sieci i odebranie (w przeciągu roku)  w nocy oraz dni, kiedy instalacja produkuje mniej niż wynosi Twoje zapotrzebowanie 
                                w danym momencie.
                            </p>
                            <p>Dodatkowo Twoja elektrownia słoneczna uniezależni Cie od spadku napięcia w sieci wywołany zbyt dużym obciążeniem przez innych użytkowników, 
                                generując Twój własny prąd!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-info">
                <div className="more-info">
                    <h3>Chcesz się dowiedzieć więcej?</h3>
                    <p>Nasz wykwalifikowany specjalista do spraw fotowoltaiki podpowie Ci, ile Twoja firma może zaoszczędzić dzięki instalacji paneli fotowoltaicznych.
                        Z rozmowy dowiesz się, jaki będzie średni koszt instalacji paneli oraz kiedy taka inwestycja się zwróci.
                    </p>
                    <button className="btn-more"><a href="/kontakt/">Skontaktuj się z nami</a></button>
                </div>
            </div>
            <div className="container container-about">
                <div className="about-article">
                    <div className="about-text">
                        <h3>Prosument wytwarza energię elektryczną z odnawialnych źródeł energii</h3>
                        <p>na własne potrzeby za pomocą mikroinstalacji (do 50 kWp), którą może także magazynować i przekazywać nadwyżkę do sieci energetycznej, a następnie takie nadwyżki energii rozliczać w systemie opustów.</p>
                    </div>
                    <div className="about-img">
                        <img src={aboutImage} alt="proster building" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default oferta
