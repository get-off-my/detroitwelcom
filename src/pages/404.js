import React from 'react'
import Layout from "..//components/layout"
import styles from '../css/error.module.css'
import { Link } from 'gatsby'
import Banner from '../components/banner'

export default function error () {
    return(
        <Layout>
           <header className={styles.error}>
               <Banner title="Dead End Bro">
                    <Link to="/" className="btn-white">Go Back Bro</Link>
               </Banner>
           </header>
        </Layout>
    )
}