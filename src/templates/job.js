import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from './../components/layout'
import './../kariera.css'

const Job = ({data}) => {
    const duties = data.strapiJobs.obowiazki.map(item => {
        return <li>- {item.listItem}</li>
    })
    const needs = data.strapiJobs.obowiazki.map(item => {
        return <li>- {item.listItem}</li>
    })
    const niceToHave = data.strapiJobs.mileWidziane.map(item => {
        return <li>- {item.listItem}</li>
    })
    const offer = data.strapiJobs.oferujemy.map(item => {
        return <li>- {item.listItem}</li>
    })
    return (
        <Layout>
            <div className='background-top-kariera'></div>
            <div className="container">
                <div className="job-info">
                    <div className="job-header">
                        <h1>{data.strapiJobs.tytul}</h1>
                    </div>
                    <div className="job-des">
                        <div className="des-item">
                            <h3>Nasze wymagania</h3>
                            <ul className="des-list">{needs}</ul>
                        </div>
                        <div className="des-item">
                            <h3>Mile widziane</h3>
                            <ul className="des-list">{niceToHave}</ul>
                        </div>
                        <div className="des-item">
                            <h3>Oferujemy</h3>
                            <ul className="des-list">{offer}</ul>
                        </div>
                        <div className="des-item">
                            <h3>Zakres obowiązków</h3>
                            <ul className="des-list">{duties}</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="apply">
                <div className="container">
                    <div className="apply">
                        {console.log(data.strapiJobs.aplikuj)}
                        <h2>Aplikuj już teraz, jeżeli ta oferta wydała Ci się interesująca</h2>
                        <p>Przysyłając swoje zgłoszenie proszę pamiętać o zamieszczeniu podpisanej zgody na przetwarzanie danych osobowych:</p>
                        <p><b>„Wyrażam zgodę na przetwarzanie przez PROSTER sp. z o.o. z siedzibą w Brzesku przy ul. Głowackiego 67 moich danych osobowych 
                            zawartych w przesłanym CV dla potrzeb niezbędnych w procesie rekrutacji, w zakresie szerszym niż określony w Kodeksie pracy.”</b></p>
                        <button className="btn btn-apply"><a href={data.strapiJobs.aplikuj}>Aplikuj</a></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="terms">
                    <p className="terms-header">Dziękujemy za zainteresowanie naszą ofertą pracy. W odpowiedzi na otrzymaną aplikację prosimy o zapoznanie się z informacjami dotyczącymi przetwarzania danych osobowych zawartych w 
                        przesłanych przez Państwa dokumentach.</p>
                    <p>1. Administratorem danych osobowych przetwarzanych w ramach procesu rekrutacji jest PROSTER SP. Z O.O. z siedzibą przy ul. Głowackiego 67, 32-800 w Brzesku, jako pracodawca.</p>
                    <p>2. Kontakt z Administratorem danych osobowych jest możliwy pod adresem:
                            Proster Sp. z o.o.,ul. Głowackiego 67, 32-800 Brzesko
                            e-mail:rodo@proster.net.pl</p>
                    <p>3. Dane osobowe (oraz dane do kontaktu - o ile zostaną podane) będą przetwarzane w celu przeprowadzenia obecnego postępowania rekrutacyjnego, przed zawarciem umowy, której stroną jest 
                        osoba, której dane dotyczą (art. 6 ust. 1 lit. b RODO), a w przypadku wyrażenia zgody, także w zakresie szerszym, niż określony w Kodeksie pracy oraz w kolejnych naborach pracowników Pro-
                        ster Sp. z o.o. na podstawie wyrażonej zgody (art. 6 ust. 1 lit. a RODO),</p>
                    <p>4. Osobie, której dane dotyczą przysługuje prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej 
                        cofnięciem, </p>
                    <p>5. Odbiorcą danych może być podmiot działający na zlecenie administratora danych, tj. podmiot świadczący usługi IT w zakresie serwisowania i usuwania awarii.;</p>
                    <p>6. Dane zgromadzone w procesach rekrutacyjnych będą przechowywane przez okres nie dłuższy niż do 6 miesięcy.</p>
                    <p>7. Osobie, której dane dotyczą przysługuje prawo dostępu do swoich danych osobowych, żądania ich sprostowania lub usunięcia. Wniesienie żądania usunięcia danych jest równoznaczne z rezy-
                        gnacją z udziału w procesie rekrutacji prowadzonym przez Proster Sp. z o.o.. Ponadto przysługuje jej prawo do żądania ograniczenia przetwarzania w przypadkach określonych w art. 18 RODO.</p>
                    <p>8. Osobie, której dane dotyczą przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych na niezgodne z prawem przetwarzanie jej danych osobowych. Organ ten 
                        właściwy do rozpatrzenia skargi z tym, że prawo wniesienia skargi dotyczy wyłącznie zgodności z prawem przetwarzania danych osobowych, nie dotyczy zaś przebiegu procesu rekrutacji.</p>
                    <p>9. Podanie danych zawartych w dokumentach rekrutacyjnych nie jest obowiązkowe, jednak jest warunkiem umożliwiającym ubieganie się o przyjęcie kandydata do pracy.</p>
                    <p>10. Podane dane osobowe nie podlegają zautomatyzowanemu podejmowaniu decyzji, w tym o proﬁlowaniu, o którym mowa w art. 22 ust. 1 i 4 RODO.</p>
                    <p>11. Administrator nie planuje przekazywać danych osobowych do Państw trzecich lub organizacji międzynarodowych.</p>
                    <p>12. Osoby, których oferty zostaną pozytywnie rozpatrzone, będą powiadomione o terminie rozmowy kwaliﬁkacyjnej.</p>
                    <p>13. Osoby, których oferty zostaną rozpatrzone negatywnie, nie będą o tym informowane, a oferty zostaną usunięte.</p>
                    <p>14. Administrator wyznaczył Inspektora Ochrony Danych z którym można się kontaktować wysyłając e-maila na adres: rodo@proster.net.pl.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Job

export const query = graphql`
query JobsTemplate($id: String){
    strapiJobs(id: {eq: $id}) {
      id
      tytul
      aplikuj
      mileWidziane {
        id
        listItem
      }
      obowiazki {
        id
        listItem
      }
      oferujemy {
        id
        listItem
      }
    }
  }
`

