import React from 'react'
import Layout from "..//components/layout"
import StyledHero from '../components/styledhero'
import {graphql} from 'gatsby'
import Contact from '../components/Contact/Contact'

export default function contact ({data}) {
    return(
    <Layout>
        <StyledHero img={data.contactBcg.childImageSharp.fluid}/>
        <Contact/>
    </Layout>
    )
}

export const query = graphql`
query{
  contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp 
      }
    }
  }
}
`