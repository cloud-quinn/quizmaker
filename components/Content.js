import React, { Component, PropTypes } from 'react'

class Content extends Component {

render() {
   
    let question = "Question number 1?";
    let answers = ["A: option 1", "B: option 2", "C: option 3", "D: option 4"];

    return (
      <section className="main">
        <h4>{ question }</h4>
            <div>
                {answers.map(function(answer, index){
                    return <p key={index}><input type="radio" name="answer" value={answer} />&nbsp;<span>{answer}</span></p>;
                  })}
            </div>
      </section>
    )
  }

}

export default Content
