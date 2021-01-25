import React from 'react'

import Question from './../components/Question'
import RadioQuestion from '../components/RadioQuestion'
import RadioQuestion2 from '../components/RadioQuestion2'

import './Quiz.css'

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [
        { correct: "Solaris", now: "" },
        { correct: "Linus Torvalds", now: "" },
        { correct: "ps aux", now: "" }
      ],
      numberQuestion: -1,
      points: 0,
      infoText: '',
      isGoodAnswer: false
    };
  }

  checkQuestion = (e, id) => {
    let { points, isGoodAnswer, infoText, answers, numberQuestion } = this.state;
    const answer = answers[numberQuestion]
    answers[id].now = e.target.value;
    if (answer.correct === answer.now) {
      points++;
      infoText = "dobrze!"
      isGoodAnswer = true;
    } else {
      infoText = "źle!"
      isGoodAnswer = false;
    }
    this.setState({ answers: this.state.answers, points, infoText, isGoodAnswer })
  }

  handleSubmit = (e) => {
    e?.preventDefault();
    let { points, isGoodAnswer, infoText, answers, numberQuestion } = this.state;
    if (this.state.answers.length - 1 === numberQuestion) {
      isGoodAnswer = true;
      infoText = `Twój wynik to ${points}/${answers.length}`
    }
    else {
      infoText = '';
    }
    this.setState({ points, infoText, isGoodAnswer, numberQuestion: numberQuestion + 1 })
  }

  finishTime = () => {
    let { points, answers, isGoodAnswer, infoText } = this.state;
    isGoodAnswer = true;
    infoText = `Twój wynik to ${points}/${answers.length}`
    this.setState({ isGoodAnswer, infoText, numberQuestion: this.state.answers.length })
  }

  handleStart = () => {
    this.setState({ numberQuestion: 0 })
  }

  render() {
    const items = []; // pytania do quizu

    if (this.state.answers.length > 0) {
      items.push(
        <Question title="Która nazwa nie jest dystrybucją Linuxa?" finishTime={this.finishTime}>
          <RadioQuestion
            correct={this.state.answers[items.length].correct}
            id={items.length + 1}
            answers={["Solaris", "Slackware", "Gentoo", "Debian"]}
            handleChange={(e) => this.checkQuestion(e, 0)}
            disabled={this.state.infoText !== '' ? true : false}
          />
        </Question>
      )

      items.push(
        <Question title="Jak nazywa się twórca Linuxa?" finishTime={this.finishTime}>
          <br />
          <input
            className="Quiz-input"
            onBlur={(e) => this.checkQuestion(e, items.length - 1)}
            type='text'
            disabled={this.state.infoText !== '' ? true : false}
          />
        </Question>
      )

      items.push(
        <RadioQuestion2
          title="Jak wyświetlisz wszystkie procesy działające w systemie?"
          finishTime={this.finishTime}
          correct={this.state.answers[items.length - 1].correct}
          id={items.length + 1}
          answers={["rm -fr", "cd", "chmod +rx", "ps aux"]}
          handleChange={(e) => this.checkQuestion(e, items.length - 1)}
          disabled={this.state.infoText !== '' ? true : false}
        />
      )
    }

    const { answers, numberQuestion } = this.state;
    return (
      <form id="quiz" className='Quiz' onSubmit={this.handleSubmit}>
        <h4>Quiz</h4>
        {
          numberQuestion === -1 ?
            <button type='button' data-testid="start quiz" onClick={this.handleStart}>
              rozpocznij quiz
            </button> :
            <>
              {numberQuestion <= answers.length - 1 &&
                items[numberQuestion]}
              <button type='submit' data-testid="b quiz" disabled={answers.length - 1 < numberQuestion ? true : false}>
                {answers.length - 1 <= numberQuestion ? "wyślij" : "dalej"}
              </button>
              {
                this.state.infoText.length > 0 &&
                <p className={this.state.isGoodAnswer ? 'Quiz-good-text-info' : 'Quiz-wrong-text-info'}>
                  {this.state.infoText}
                </p>
              }
            </>
        }
      </form>
    )
  }
}

export default Quiz;