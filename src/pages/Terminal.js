import React from 'react'

import './Terminal.css'

class Home extends React.Component {
  render() {
    return (
      <div id='terminal' className='Terminal'>
        <div className='Terminal-content'>
          <h4>Terminal</h4>
          <p>Bardzo ważną cechą systemów uniksowych jest rozdzielenie systemu, czyli procesów wykonujących zadania, od interfejsu. Dotyczy to nie tylko interfejsu graficznego, ale także i tekstowego. </p>
          <p>Jądro Linux ma zaimplementowaną emulację terminali. Obecnie wbudowana obsługa terminali w GNU/Linuksie umożliwia zarówno zdalną pracę (np. zdalną administrację serwerem), jak i wykorzystanie wielozadaniowości systemu także w środowisku tekstowym (uruchomienie wielu terminali odpowiada funkcjonalnie otwarciu wielu okien, gdzie w czasie gdy jeden program jest zajęty i nie odpowiada, możemy pracować w innym).</p>
        </div>
        <div className='Terminal-movie'>
          <iframe
            title="movie_1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cfLxlFxNGuc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          <iframe
            title="movie_2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fYT9AFvtPso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>
    )
  }
}

export default Home;