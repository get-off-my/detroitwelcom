import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout"
import Banner from '../components/banner'
import About from '../components/Home/about'
import Services from '../components/Home/services'
import StyledHero from '../components/styledhero'
import {graphql} from 'gatsby'



export default ({data}) => (

<Layout> 
 <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
    <Banner title="Explorer Detroit" info="Come on in to Detroit">
        <AniLink fade to="/tours" className="btn-white">
         Explorer Detroit
        </AniLink >
    </Banner>
  </StyledHero>
  <About />
  <Services/>
</Layout>
)


export const query = graphql`
query{
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp 
      }
    }
  }
}
`