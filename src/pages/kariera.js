import React from 'react'
import Layout from './../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import './../kariera.css'
import arrowIcon from './../assets/arrow.png'

const Kariera = () => {
    const {allStrapiJobs:{
        edges
    }} = useStaticQuery(query)
    const jobs = edges.map(item =>{
        return <li className="jobs-item">
          <a key={item.node.id}
          href='https://www.pracuj.pl/praca/doradca-klienta-biznesowego-ds-oze-podkarpackie,oferta,8346773' 
          target='_blank'>{item.node.tytul}</a> 
            <img className="img-fluid" alt="arrow icon" src={arrowIcon} />
          </li>
    })
    return (
        <Layout>
            <div className="background-top-kariera">

            </div>
           <div className="container">
               <div className="jobs-header">
                    <h2><span>Współpraca</span> ogłoszenia</h2>
               </div>
            <ul className="jobs-items">
                {jobs}
            </ul>
           </div>
        </Layout>
    )
}
export const query = graphql`
  {
    allStrapiJobs {
      edges{
        node {
            id
            aplikuj
            tytul
            mileWidziane {
              listItem
            }
            obowiazki {
              listItem
            }
            oferujemy {
              listItem
            }
          }
      }
    }
  }
`

export default Kariera
