import React from 'react'
import { Link } from 'react-router-dom'
import {Animated} from 'react-animated-css'
import { isMobile, MobileView } from 'react-device-detect'

import './ListenView.css'
import Loader from '../components/loaders/Loader';

class ListenView extends React.Component {


  renderContent = () => {
    if (isMobile) {
      return (
        <MobileView>
          <div className="flex-container">
            <div className="loader-listen">
              <Animated
                animationIn={ `fadeIn` }
                animationInDelay={this.props.animationInDelay} // 1000
                animationOut={ `fadeOut` }
                animationOutDelay={this.props.animationOutDelay} // 5000
                isVisible={ this.props.isVisible }
              >
                <Loader
                  loaderName="listening"
                />
              </Animated>
            </div>

            <div className="action-button-listen">
              <Animated
                animationIn={'fadeInUp'}
                animationInDelay={4000} // 2000
                animationOut={`fadeOutDown`}
                animationOutDelay={10000} // 5300
                isVisible={this.props.isVisible}
              >
                <Link className="btn btn-light" to='/'>
                  Restart <span role='img' aria-label="flag">🏁</span>
                </Link>
              </Animated>
            </div>
          </div>
        </MobileView>
      )
    }

    // return (
    //   <div className="flex-container">
    //     <div className="message-text text-center">
    //       <p>The content is unavailable on the browser. Please use your smartphone to view the content, thank you! <span role="img" aria-label="hand">✌️</span></p>
    //     </div>

    //     <p className="small text-black-50">You're staring at this blank page from this URL: {`${this.props.location.pathname}`}.</p>
    //   </div>
    // )
  }

  render() {
    return (
      <React.Fragment>
        { this.renderContent() }
      </React.Fragment>
    )
  }
}

export default ListenView
