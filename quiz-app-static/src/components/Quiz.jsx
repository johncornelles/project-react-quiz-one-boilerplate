import { Component } from 'react'
import './quiz.css'
export default class Quiz extends Component {
  render() {
    return (
      <div
      className="quiz-div">
        <h1>Question</h1>
        <p className="quetion-number">1 of 15</p>
        <p className="question">Which is the only mammal that can jump</p>
        <div className="answers">
            <button className="answer1 answer">Dog</button>
            <button className="answer2 answer">Elephant</button>
            <button className="answer3 answer">Goat</button>
            <button className="answer3 answer">Lion</button>
        </div>
        <div className="controls">
            <button className="control previous">previous</button>
            <button className="control next">next</button>
            <button className="control quit">quit</button>
        </div>
      </div>
    )
  }
}
