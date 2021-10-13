import React from 'react'
import Layout from './../components/layout'
import './../oferta.css'
import infoImage from './../assets/info-img.png'
import aboutImage from './../assets/about-img.png'
import adr from './../assets/ADR.svg'
import automatyzacja from './../assets/automatyzacja.svg'
import elektromechanika from './../assets/elektromechanika.svg'
import fotowoltaika from './../assets/fotowoltaika.svg'
import modernizacje from './../assets/modernizacje.svg'
import oswietlenie from './../assets/oswietlenie.svg'
import paletyzacja from './../assets/paletyzacja.svg'
import pomiary from './../assets/pomiary.svg'
import robotyka from './../assets/robotyka.svg'
import utrzymanie_ruchu from './../assets/utrzymanie_ruchu.svg'

const oferta = () => {
    return (
        <>
        <Layout>
            <div className="background-top-oferta"></div>
            <div className="container">
                <div className="main-article">
                    <div className="main-article-header">
                        <h2><span>Fotowoltaika</span> - Dopasujemy rozwiązanie do potrzeb Twojej firmy </h2>
                        <p>Przez ponad 35 lat wdrożyliśmy już setki rozwiązań usprawniających
                            działania operacyjne w firmach naszych klientów. W naszym portfolio
                            znajdują się usługi i produkty odpowiadające na wszystkie główne
                            potrzeby zakładów produkcyjnych i cały czas dbamy o to, aby
                            poszerzać swoje kompetencje odpowiadając na najnowsze potrzeby
                            rynkowe. Z takiej potrzeby zrodził się dział fotowoltaiki dla przemysłu.</p>
                        <p>Nasza oferta kierowana jest dla MŚiP a także do Firm, które
                            zainteresowane są Mikroinstalacjami (czyli instalacjami do 50 kWp w
                            rozliczeniu Prosumenta) oraz jeśli będzie potrzeba możemy przy okazji
                            wykonać projekt nowych, jak również modernizacje istniejących
                            instalacji elektrycznych i elektroenergetycznych.</p>                    
                        <p>Produkcja prądu z instalacją fotowoltaiczną w Twojej firmie to
                            sposób na uniezależnienie się od podwyżek cen prądu i zyskanie
                            oszczędności. Oświetlenie, klimatyzatory, maszyny produkcyjne, pompy
                            ciepła, piece elektryczne i inne urządzenia działające na prąd
                                mogą zostać zasilone z energii cieplnej.</p>
                    </div>
                    <div className="main-article-info">
                        <div className="info-image">
                            <img src={infoImage} alt="working on roof"></img>
                        </div>
                        <div className="info-text">
                            <h3>Korzyści z instalacji fotowoltaicznej:</h3>
                            <p>- szybki zwrot inwestycji</p>
                            <p>- korzystne finansowanie</p>
                            <p>- oszczędność i generowanie zysku</p>
                            <p>- inwestycja w ekologię</p>
                            <p>- niezawodność</p>
                            <p>- niewyczerpane źródło energii</p>
                            <p>- cicha i czysta energia</p>
                            <p>- monitorowanie produkcji i zużycia energii</p>
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
                        <div className='about-first'>
                            <div className='about-item'><img src={elektromechanika} className='about-icon' /> <p>Elektromechanika</p> </div>
                            <div className='about-item'><img src={robotyka} className='about-icon'/> <p>Automatyka i robotyka</p> </div>
                            <div className='about-item'><img src={paletyzacja} className='about-icon'/> <p>Paletyzacja i kompleksowe systemy transportu technologicznego</p> </div>
                            <div className='about-item'><img src={modernizacje} className='about-icon'/> <p>Relokacje maszyn i linii technologicznych</p> </div>
                            <div className='about-item'><img src={automatyzacja} className='about-icon'/> <p>Automatyzacja produkcji</p> </div>
                        </div>
                        <div className='about-second'>
                            <div className='about-item'><img src={utrzymanie_ruchu} className='about-icon'/> <p>Utrzymanie ruchu</p> </div>
                            <div className='about-item'><img src={pomiary} className='about-icon'/> <p>Pomiary</p> </div>
                            <div className='about-item'><img src={adr} className='about-icon'/> <p>ADR (Analiza, Doradztwo, Realizacja)</p> </div>
                            <div className='about-item'><img src={oswietlenie} className='about-icon'/> <p>Profesjonalne oświetlenie LED</p> </div>
                            <div className='about-item'><img src={fotowoltaika} className='about-icon'/> <p>Fotowoltaika</p> </div>
                        </div>
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
