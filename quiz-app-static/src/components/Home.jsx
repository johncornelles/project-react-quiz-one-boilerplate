import { Component } from 'react'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <div className='home-div'>
        <h3 className='quiz-title'>Quiz App</h3>
        <button className='play-btn btn'>Play</button>
      </div>
    )
  }
}
