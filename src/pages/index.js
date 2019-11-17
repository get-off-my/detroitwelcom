import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import SimpleHero from '../components/simplehero'
import Banner from '../components/banner'
import About from '../components/Home/about'
import Services from '../components/Home/services'


export default () => (
<Layout> 
 <SimpleHero>
    <Banner title="Explorer Detroit" info="Come on in to Detroit">
        <Link to="/tours" className="btn-white">
         Explorer Detroit
        </Link >
    </Banner>
  </SimpleHero>
  <About />
  <Services/>
</Layout>
)