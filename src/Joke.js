import React, { useState } from 'react';
import './joke.scss';

function Question(props) {
    return (
      <div>
        <p className="question"> {props.question} </p>
        <div className="corner" onClick={props.clickHandler}></div>
      </div>
    )
}

function Punchline(props) {
    return (
      <div>
        <p className="punchline"> {props.punchline} </p>
      </div>
    )
}


function Joke({structure}) {

    const [isClicked, setIsClicked] = useState(false);

    function showAnswer(e) {
        e.preventDefault();
        const currentState = isClicked;
        setIsClicked(!currentState);
        
    }
    
    return (
      <div className="main">
          <div className="jokeContainer">
              <div className="joke">
              
                { structure.question? <Question question={structure.question} clickHandler={showAnswer} /> : <Punchline punchline={structure.punchline} /> }
                
                
                { isClicked? <p className="punchline"> {structure.punchline} </p> : null }
                

              </div>
          </div>
        
      </div>
    );
}

export default Joke;

