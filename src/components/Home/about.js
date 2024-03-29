import React from 'react'
import Title from '../title'
import styles from '../../css/about.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth:600){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {

const{ aboutImage } = useStaticQuery(getAbout) 

    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                       <Img fluid={aboutImage.childImageSharp.fluid} alt="landscape"/>
                    </div>
                </article>  
                <article className={styles.aboutInfo}>
                    <h4>Exploere Detroit</h4>
                    <p>lsafsdfaslfkdjlsadsodmaosdno laskdfoajsfoas</p>
                    <p>lsafsdfaslfkdjlsadsodmaosdno laskdfoajsfoas</p>
                    <button type="button" className="btn-primary">read more</button>
                </article>
            </div>
        </section>
    )
}

export default About 