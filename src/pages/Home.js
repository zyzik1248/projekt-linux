import React from 'react'

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div id='home' className='Home'>
        <div className='Home-info'>
          <p className='Home-big-text'>Wszystko o linuxie</p>
          <p className='Home-small-text'>
            Na tej stronie dowiesz się ciekawych informacji na temat tego systemu
          </p>
        </div>
      </div>
    )
  }
}

export default Home;