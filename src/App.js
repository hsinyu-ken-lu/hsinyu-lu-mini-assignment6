import './App.css';
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  roll() {
      let value = Math.floor(Math.random() * 6) + 1; 
      this.props.rollDice({type:"ROLL", val:value});

  }

  clear(){
      this.props.rollDice({type:"CLEAR"});
  }

  render() {
      return (
          <div>
              <button className="button" onClick={() => this.roll()}>Roll Dice</button>
              <button className="button" onClick={() => this.clear()}>Clear</button>
              <div className="sum">Sum: {this.props.dices.sum} </div>
              <div className='container'>
                  {
                    this.props.dices.arr.map((value, index) => {
                      return <div className='dice' key={index}>{value}</div>
                    })
                  }
              </div>
          </div>
      )

  }
}

let mapDispatchToProps = function(dispatch, props) {
  return {
      rollDice: (val) => {
        dispatch(val);
      }
  }
}

let mapStateToProps = function(state, props) {
  return {
      dices: state.dices
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)