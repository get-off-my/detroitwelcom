import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {

    const { site:  {siteMetadata},} = useStaticQuery(graphql`
   query Numor{
        site{
          siteMetadata{
            titile
            description
            author
          }
        }
      }
    `)

    console.log(siteMetadata)

    return(
        <div>   
            <h1>Title:{siteMetadata.titile}</h1>
            <h1>Author: {siteMetadata.author}</h1>
        </div>
    )
}

export default Header 