import React from "react"
import { graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/reuse/Hero"
import Heading from "../components/reuse/heading"
import "../../src/components/layout.css"
import Dualinfo from '../components/reuse/dualinfo'
import Team from "../components/reuse/team"
import Cards from '../components/reuse/cards'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <Hero 
    src = {data.img.childImageSharp.fluid}
    title = "Nishit Patel"
    subtitle = "hello world!"
    heroclass = "h-background"
  />
  <Cards products={data.products}/>
  <Dualinfo title="About Page"/>
  
  </Layout>
)
export const query = graphql `
{
  img:  file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
            }
      }
    }
    products: allContentfulProducts{
      edges{
        node{
          title
          price
          image{
            fixed(width:400 , height:200){
              ...GatsbyContentfulFixed_tracedSVG              
            }
          }
        }
      }
    }
}
`


export default IndexPage
