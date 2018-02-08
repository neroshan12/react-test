import React from 'react';
// import './index.css';
import Counter from './counterModel.js';

class VotingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVote: null
    };
    // this.setState({ voteCount: this.counter.upVote  })

    this.counter = new Counter()

  }

//   this.setState((counter) => {
//   return {counter: counter.upVote};
// });



  render() {
    return ([
    <button onClick={() => this.setState( { currentVote: this.counter.voteHot() } )
  } id='hotButton' key='1'>Vote Hot!</button>,
    <p id='voteDisplay' key='2'>Hello Nero, the vote stands at {this.state.currentVote}</p>
    // console.log(this.state.counter)
    // <p>{this.props.name}</p>

  ])
  }
}
// ); //find root and replace
export default VotingButton;
