import React from 'react'
import './Question.css'
import PropTypes from 'prop-types';

class Question2 extends React.Component { //dziedziczenie
  constructor(props) {
    super(props);
    this.state = { time: 60 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  tick = () => {
    this.setState({ time: this.state.time - 1 });
    if (this.state.time === 0) {
      this.props.finishTime();
      clearInterval(this.timerID);
    }
  }

  render(arg) {
    return (
      <div className="Question">
        <div className="Question-timer" data-testid='timer'>{this.state.time}</div>
        {this.props.title}
        {arg}
      </div>
    )
  }
}

Question2.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Question2;