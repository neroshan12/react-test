class Counter {
  constructor() {
    this.currentVote = 0;
  }

  voteHot() {
    this.currentVote += 1;
    console.log(this.currentVote);
    return this.currentVote
  }
  //
  // apiCall(url){
  //   return new Promise(function(resolve, reject) {
  //
  //     var httpRequest = new XMLHttpRequest();
  //     httpRequest.onreadystatechange = function () {
  //       if (httpRequest.readyState === 4) {
  //         if (httpRequest.status === 200) {
  //           resolve(this.upVote = httpRequest.responseText);
  //         } else {
  //           reject(Error(httpRequest.status))
  //         }
  //       }
  //     };
  //     httpRequest.open('GET', url);
  //     httpRequest.send();
  //   })
  // }
}

export default Counter;
