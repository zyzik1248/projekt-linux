import React from 'react'

import './Distributions.css'
import distributions from './../assets/distributions.json'
import distributions2 from './../assets/distributions2.json'
import requireContext from 'require-context.macro';

class Home extends React.Component {
  constructor() {
    super();
    this.txtData = () => JSON.parse(JSON.stringify(distributions));
    this.txtData2 = () => JSON.parse(JSON.stringify(distributions2));
    const imgContext = requireContext('../assets/', false, /\.png$/);
    let img = {}
    this.imgs = imgContext.keys().reduce((icons, file) => {
      const cname = imgContext(file).default;
      const label = file.slice(2, -4);
      img[label] = cname;
      return img;
    }, {})
  }

  render() {
    const tabData = this.txtData().data; 

    const items = tabData.map((item) => ( //2.2 pierwszy sposób
      <div className='Distributions-item' key={item.title}>
        <div id={`distribution-${item.id}`} className="Distributions-item-content">
          <img alt={item.title} data-testid='logo_distr' src={this.imgs[item.img]} />
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>
    ))

    const tabData2 = this.txtData2();

    const items2 = []; //2.2 drugi sposób
    for (let i = 0; i < tabData2.count; i++) {
      let value = tabData2.data[i]
      items2.push(
        <div className='Distributions-item' key={value.title}>
          <div className="Distributions-item-content">
            <img alt={value.title} data-testid='logo_distr' src={this.imgs['logo' + (i + 1)]} />
            <h1>{value.title}</h1>
            <p>{value.text}</p>
          </div>
        </div>
      )
    }

    return (
      <div id='distributions' className="Distributions">
        <div className='Distributions-items'>
          {items}
          {items2}
        </div>
      </div>
    )
  }
}

export default Home;