import React from 'react';
import ReactDOM from 'react-dom';
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
  } id='hotButton'>Vote Hot!</button>,
    <p>Hello Nero, the vote stands at {this.state.currentVote}</p>
    // console.log(this.state.counter)
    // <p>{this.props.name}</p>

  ])
  }
}
ReactDOM.render(<VotingButton />, document.getElementById('root')
); //find root and replace
export default VotingButton;
