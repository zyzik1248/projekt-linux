import React from 'react'
import PropTypes from 'prop-types';

import './RadioQuestion.css'
import Question2 from './Question2'

class RadioQuestion2 extends Question2 { //dzedziczenie
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
      super.render(
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
    )
  }
}

RadioQuestion2.PropTypes = {
  answers: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default RadioQuestion2;