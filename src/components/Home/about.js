import React from 'react'
import Title from '../title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'


const about = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
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

export default about 