import React from 'react'
import { Link } from 'react-router-dom'
import {Animated} from 'react-animated-css'
import { isMobile, MobileView } from 'react-device-detect'

import Loader from '../components/loaders/Loader'

import './StaticView.css'

class StaticView extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <MobileView>
          <div className="flex-container">
            <div className="loader">
              <Animated
                animationIn={'fadeIn'}
                animationInDelay={this.props.animationInDelay}
                animationOut={`fadeOut`}
                animationOutDelay={ this.props.animationOutDelay }
              >
                <Loader loaderName="static" />
              </Animated>
            </div>

            <Animated
              animationIn={`fadeInUp`}
              animationInDelay={1500}
            >
              <Link className="btn btn-light" to="/typing">
                Start <span role="img" aria-label="run">🏃🏻</span>‍
            </Link>
            </Animated>
          </div>
        </MobileView>
      )
    }

    return (
      <div className="flex-container">
        <div className="message-text text-center">
          <p>The content is unavailable on the browser. Please use your smartphone to view the content, thank you! <span role="img" aria-label="hand">✌️</span></p>
        </div>

        <p className="small text-black-50">You're staring at this blank page from this URL: {`${this.props.location.pathname}`}.</p>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }
}

export default StaticView
 