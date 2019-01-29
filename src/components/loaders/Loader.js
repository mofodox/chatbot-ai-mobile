import React from 'react'

import loadingStaticGif from '../../assets/static.gif'
import loadingTypingGif from '../../assets/typing.gif'
import loadingListeningGif from '../../assets/listening.gif'

class Loader extends React.Component {
  checkLoader = () => {
    switch(this.props.loaderName) {
      case 'static':
        return <img src={loadingStaticGif} className="img-fluid loader" alt="static"/>
      case 'typing':
        return <img src={loadingTypingGif} className="img-fluid loader" alt="typing"/>
      case 'listening':
        return <img src={loadingListeningGif} className="img-fluid loader" alt="listening" />
      default:
        return null
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.checkLoader()}
      </React.Fragment>
    )
  }
}

export default Loader
