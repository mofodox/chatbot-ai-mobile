import React from 'react'
import TextyAnim from 'rc-texty'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'
import { isMobile, MobileView } from 'react-device-detect'

import Loader from '../components/loaders/Loader';

import './TypingView.css'

class TypingView extends React.Component {
  getSplit = (e) => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push((
        <span key={`${str}-${i}`}>
          {str}
        </span>
      ));
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <MobileView>
          <div className="flex-container">
            <TextyAnim
              type="left"
              mode="smooth"
              duration={550}
              delay={2000}
              split={this.getSplit}
              className="message-text-animation"
            >
              {`This is the largest continuous structure associated with the planets.`}
            </TextyAnim>
            <div className="loader-block">
              <Animated
                animationIn='fadeIn'
                animationInDelay={this.props.animationInDelay} // 1600
                animationOut={ `fadeOut` }
                animationOutDelay={ this.props.animationOutDelay }
                isVisible={this.props.isVisible}
              >
                <Loader
                  loaderName="typing"
                />
              </Animated>
            </div>

            <Animated
              animationIn={`fadeInUp`}
              animationInDelay={4500} // 4500
              animationOut={ `fadeOutDown` }
              animationOutDelay={ 5000 }
              isVisible={this.props.isVisible}
            >
              <Link className="btn btn-light mt-4" to="/listen">
                Continue <span role='img' aria-label="arrow">➡</span>
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
        { this.renderContent() }
      </React.Fragment>
    )
  }
}

export default TypingView
