import React from 'react'
import './Question.css'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 60 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>  this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ time: this.state.time - 1 });
    if (this.state.time === 0) {
      this.props.finishTime();
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div className="Question">
        <div className="Question-timer" data-testid='timer'>{this.state.time}</div>
        {this.props.title}
        {this.props.children}
      </div>
    )
  }
}

export default Question;