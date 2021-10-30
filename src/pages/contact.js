import React, { Component } from "react"
import Layout from "../components/layout"
import HerosectionPage from "../components/herosectionPage"
import "../styles/contact.scss"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

class Contact extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"Contact Me"}
          description={"Contact Vrinda Vyas. Vrinda Vyas is a web developer studying computer engineering. This blog reflects Raj's ideas, projects and learnings."}
          url={"/contact"}
        />
        <HerosectionPage title={"Contact Me"} />

        <div className="content-container">
          <div className="contactCntnr">
            {/* <div className="contactFormCntnr">
              <ContactForm />
            </div> */}

            <div className="contactDetailsCntnr">
              <div className="contactDetails">
                <h2>Connect </h2>
                <ul>

                  <a href={"mailto:vrindavyas10@gmail.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li>
                      <span className={"contactIcon"}>
                        <i className="fa fa-2x fa-envelope" />
                      </span>
                      vrindavyas10@gmail.com
                    </li>
                  </a>



                  <a href={"https://www.instagram.com/imvrinda/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li>
                      <span className={"contactIcon"}>
                        <i className="fa fa-2x fa-instagram" />
                      </span>
                      @imvrinda
                    </li>
                  </a>

                  <a href={"https://www.linkedin.com/in/vrinda-s-vyas/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li style={{ "marginBottom": "15px" }}>
                      <span className={"contactIcon"}>
                        <i className="fa fa-2x fa-linkedin" />
                      </span>
                      @vrinda-s-vyas
                    </li>
                  </a>
                  <a href={"https://www.facebook.com/imvrindavyas"} target={"_blank"} rel={"noopener noreferrer"}>
                    <li style={{ "marginBottom": "15px" }}>
                      <span className={"contactIcon"}>
                        <i className="fa fa-2x fa-facebook" />
                      </span>
                      @imvrindavyas
                    </li>
                  </a>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact