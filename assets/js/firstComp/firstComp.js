import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      health: '100',
      level: 1,
      lowLevelClass: 'danger-red'
    }
    this.clickedGirl = this.clickedGirl.bind(this)
  }

  clickedGirl() {
    this.setState({
      health: this.state.health - 25
    }, function () {
      console.log('CLICKED GIRL HEALTH IS NOW' + this.state.health)
    })
  }

  render() {
    return (<div id={'parent'}>
      <Header />
      <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''}`}>
        <div className={'user-info'}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
        </div>
        <GirlImage />
      </div>
    </div>)
  }
}

class GirlImage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (<div className="GirlImageComp">
      <img src="/img/bape.png" alt={'girl wearing bape'} onClick={this.clickedGirl} />
    </div>)
  }
}

var Header = function () {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>)
}


const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
