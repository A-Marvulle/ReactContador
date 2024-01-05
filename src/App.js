import './App.css';
import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div className='back'>
        <span className='main'>
          <h1>Número Atual: {this.state.count}</h1>
          <button className='inc' onClick={this.increment}>+</button>
          <button className='dec' onClick={this.decrement}>-</button>
          <button className='reset' onClick={this.reset}>0</button>
        </span>
      </div>
    );
  }
};

export default Counter;
