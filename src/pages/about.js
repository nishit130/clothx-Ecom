import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import Dualinfo from '../components/reuse/dualinfo'
import Team from "../components/reuse/team"
import Heading from "../components/reuse/heading"
import Hero from "../components/reuse/Hero"

const about = ({data}) => (
    <Layout>
        <Hero 
            src = {data.src.childImageSharp.fluid}
            title = "About Page"
            subtitle = ""
            heroclass = "about-cover"
        />
        <Dualinfo title="About Page"/>
        <Heading heading="My Team"/>
        <Team/>
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