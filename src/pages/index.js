import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/homepageHero.scss"

var ReactRotatingText = require('react-rotating-text');

class Index extends Component {
  render() {

    return (
      <Layout location={this.props.location} customNavClass={"homePageNav"} customclass={"homePageWrapper"}>
        <SEO title={"Home"} />
        <div className="homepageHeroCntnr">
          <div id='stars' />
          <div id='stars2' />
          <div id='stars3' />
          <div id='title'>

            <div className="homepageHeroIntroCntnr">
              <span class={"homepageHeroHi"}>
                Hi, I'm Vrinda
              </span>
              <br />
              <div className={"homepageHeroIntro homepageHeroIntroTop"}>
                I'm a front-end web developer.
              </div>

              <div className=" homepageHeroIntro">This Website reflects my <ReactRotatingText items={['ideas.', 'projects.', 'learnings.']} /></div>
            </div>
          </div>
        </div>


      </Layout>
    )
  }
}

export default Index
