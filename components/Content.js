import React, { Component, PropTypes } from 'react'

class Content extends Component {

render() {
   
    let question = "Question number 1?";
    let answers = ["A: option 1", "B: option 2", "C: option 3", "D: option 4"];

    return (
      <section className="main">
        <h4>{ question }</h4>
                    <ul>
                {answers.map(function(answer, index){
                    return <li key={ index }>{answer}</li>;
                  })}
            </ul>
      </section>
    )
  }

}

export default Content
