import React from 'react'
import {Link} from 'gatsby'
import Layout from "..//components/layout"



const blog = () => {
    return(
        <Layout>
                Hello, form blog! <Link to="/">back home</Link>
        </Layout>
    )
}

export default blog