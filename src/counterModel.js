class Counter {
  constructor() {
    this.upVote = 0;
  }

  voteHot() {
    this.upVote += 1;
    console.log(this.upVote);
  }
}

export default Counter;
