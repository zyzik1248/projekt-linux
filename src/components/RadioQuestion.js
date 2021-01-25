import React from 'react'

import './RadioQuestion.css'

class RadioAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  componentDidMount() {
    let tab = this.props.answers.slice();
    const answers = [];

    for (let i = 0; i < this.props.answers.length; i++) {
      let id = Math.floor(Math.random() * tab.length);
      answers.push(
        tab[id] + ""
      )
      tab.splice(id, 1);
    }

    this.setState({ answers })
  }

  render() {
    return (
      <div className="RadioQuestion">
        {
          this.state.answers.map((el) =>
            <div key={el}>
              <input
                data-testid={`radio-question-${el}`}
                type="radio"
                id={el}
                name={`quiz_radio_${this.props.id}`}
                value={el}
                onChange={this.props.handleChange}
                disabled={this.props.disabled}
              />
              <label htmlFor={el}>{el}</label>
            </div>
          )}
      </div>
    )
  }
}

export default RadioAnswer;