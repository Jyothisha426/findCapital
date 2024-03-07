import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeStateId: countryAndCapitalsList[0].id}

  onChangeState = event => {
    this.setState({activeStateId: event.target.value})
  }

  getCountry = () => {
    const {activeStateId} = this.state
    const activeCountry = countryAndCapitalsList.filter(
      eachCapital => eachCapital.id === activeStateId,
    )
    return activeCountry
  }

  render() {
    const {activeStateId} = this.state
    const activeCountry = this.getCountry()
    console.log(activeCountry[0].country)

    return (
      <div className="app-container">
        <div className="second-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select-styles option"
              onChange={this.onChangeState}
              value={activeStateId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="qn-para"> is capital of which country?</p>
          </div>
          <h1 className="capital">{activeCountry[0].country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
