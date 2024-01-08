import { Component } from 'react'
import './result.css'
export default class Result extends Component {
  render() {
    return (
    <>
      <h1 className='result-tile'>Results</h1>
      <div className='result-div'>
        <h3 className='feedback'>You need more practice!</h3>
        <h1 className='score'>Your score is 20%</h1>
        <div className='results'>
            <div className='results-div'>
                <p className='result no-question'>Total number of questions</p>
                <p className='count'>15</p>
            </div>
            <div className='results-div'>
                <p className='result no-question'>Number of attempted questions</p>
                <p className='count'>9</p>
            </div>
            <div className='results-div'>
                <p className='result no-question'>Number of correct answers</p>
                <p className='count'>3</p>
            </div>
            <div className='results-div'>
                <p className='result no-question'>Number of wrong answers</p>
                <p className='count'>6</p>
            </div>
        </div>
      </div>
      <div className='controls-back-play'>
        <button className='play-again'>Play Again</button>
        <button className='back'>Back to home</button>
      </div>
    </>
    )
  }
}
