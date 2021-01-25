import React from 'react'

import './History.css'

class History extends React.Component {
  render() {
    return (
      <div id="history" className="History">
        <h4>Historia linuxa</h4>
        <p className='History-small-text'>
          Linux to w skrócie cała rodzina systemów operacyjnych oparta na jądrze Linux. Należy ona do specjalnego rodzaju oprogramowania jakim jest oprogramowanie wolne i otwarte. Oznacza to iż kod źródłowy może być dowolnie wykorzystany, zmodyfikowany oraz rozpowszechniany przez każdego z nas. Linux jest stosowany w rozwiązaniach systemu operacyjnego dla użytkowników domowych, firmowych oraz serwerowych. Nazwa Linux pochodzi od dwóch słów: Linus (twórca) oraz Unix. Z czasem ze słowa Linux powstał akronim Linux Is Not UniX.
        </p>
        <p className='History-small-text'>
          W 1991 roku fiński programista Linus Torvalds poinformował o tworzeniu hobbystycznego, niedużego, wolnego (od licencji) systemu operacyjnego. Linus nie stworzył systemu operacyjnego w dzisiejszym tego słowa znaczeniu ale jądro systemu. Potrzebowało ono jeszcze kilku rzeczy: powłoki systemowej, kompilatora, bibliotek. Wykorzystano wiele z narzędzi GNU, które wymagały jednak pewnych znaczących zmian. Z pomocną ręką przyszedł tu Projekt GNU, który niektóre z nich finansował oraz sam Linus. Jednymi z pierwszych Linuxów były opublikowane lipcu 1993 Slackware Linux oraz w sierpniu 1993 Debian, zwany także GNU/Linux.
        </p>
      </div>
    )
  }
}

export default History;