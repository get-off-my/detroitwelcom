import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
query{
     site{
       siteMetadata{
         titile
         description
         author
       }
     }
   }
 `



const RegularHeader = () => {
    return (
       <StaticQuery query={getSiteData} render={data =>{
           return <h1>Hello People</h1>
       }}/>
    )
}

export default RegularHeader