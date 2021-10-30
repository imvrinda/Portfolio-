import React, { Component } from "react"
import "../../styles/sociallinks.scss"

class SocialLinks extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center ">
            <ul className="list-inline social-links">
              <li>
                <a href="https://github.com/imvrinda" target={"_blank"} rel={"noopener noreferrer"} className="btn-social btn-outline" data-toggle="tooltip"
                  data-placement="top" title="Github">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/imvrindavyas" target={"_blank"} rel={"noopener noreferrer"} className="btn-social btn-outline" title="Twitter">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vrinda-s-vyas/" target={"_blank"} rel={"noopener noreferrer"} className="btn-social btn-outline" title="LinkedIn">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/imvrinda/" target={"_blank"} rel={"noopener noreferrer"} className="btn-social btn-outline" title="Instagram">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialLinks