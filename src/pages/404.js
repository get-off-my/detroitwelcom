import React from 'react'
import Layout from "..//components/layout"
import styles from '../css/error.module.css'
import Banner from '../components/banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function error () {
    return(
        <Layout>
           <header className={styles.error}>
               <Banner title="Dead End Bro">
                    <AniLink paintDrip to="/" className="btn-white">Go Back Bro</AniLink>
               </Banner>
           </header>
        </Layout>
    )
}