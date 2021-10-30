import React, { Component } from "react"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/about.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

class About extends Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <SEO
          title={"About"}
          description={"About Vrinda Vyas. "}
          url={"/about"}
        />
        <HerosectionPage title={"About"} />

        <div className={"content-container"}>

          <div className="aboutPageContainer">
            <div className="aboutRaj">
              <div className="aboutRajText">
                <div className="aboutRajTextHeading">
                  <h2>About Vrinda</h2>
                  <div className={"aboutBorderBottom"} />
                </div>

                <div className="aboutRajTextContent">
                  <p>
                    Vrinda is a Software Developer at Tata Consultancy and Services, Pune.   </p>
                  <p> A tech-aficionado, as she likes to put it, Vrinda is also a freelance web designer and developer.
                  </p>

                  <p>
                    As an aspiring software developer, you will find her speaking computerese, barely comprehensible to
                    anyone else.
                    But don’t let her overtly composed and calm visible delude you. She can easily grab your attention
                    with his eccentric and uncanny theories about ‘anything’ in general.
                  </p>

                  <p>
                    When not raising pull requests on GitHub, you will find her lost in a world of thriller movies and deep sleep.
                  </p>
                </div>
              </div>

              <div className="aboutRajPhoto">
                <Img fluid={this.props.data.allFile.nodes[0].childImageSharp.fluid} alt={"Vrinda Vyas"} />
              </div>
            </div>

          </div>

        </div>
      </Layout>
    )
  }
}

export default About

export const query = graphql`
  query AboutImageQuery {
    allFile(filter: {name: {eq: "raj-profile-pic-1"}}) {
      nodes {
        childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  }
`
