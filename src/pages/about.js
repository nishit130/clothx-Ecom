import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import Dualinfo from '../components/reuse/dualinfo'
import Hero from "../components/reuse/Hero"

const about = ({data}) => (
    <Layout>
        <Hero 
            src = {data.src.childImageSharp.fluid}
            title = "About Page"
            subtitle = ""
            heroclass = "about-cover"
            btntext = "Read in Github"
        />
        <Dualinfo title="About Page"/>
    </Layout>
)
export const query = graphql`{
    src: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid_tracedSVG
              }
        }
      }
}
`
export default about