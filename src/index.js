import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './counterModel.js';

class VotingButton extends React.Component {
  constructor() {
    super();
    this.counter = new Counter();
  }

  render() {
    return <button onClick={() => this.counter.voteHot()}>Vote Hot!</button>;
  }
}
ReactDOM.render(<VotingButton />, document.getElementById('root')); //find root and replace
export default VotingButton;
