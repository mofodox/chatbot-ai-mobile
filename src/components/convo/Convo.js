import React from 'react'

import './Convo.css'

class Convo extends React.Component {
  render() {
    return (
      <div className="message-holder">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Convo
