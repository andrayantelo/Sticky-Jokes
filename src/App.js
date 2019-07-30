import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
  return (
      <div id="root">
        <h1 className="mainHeader"> JOKES </h1>
        <Joke structure= {{
            question:"Why did the chicken cross the road?",
            punchline:"To get to the other side."
        }}/>
        <Joke structure= {{
            question:"",
            punchline:"This is my step ladder. I never knew my real ladder."
        }}/>
        <Joke structure= {{
            question:"Why do we tell actors to break a leg?",
            punchline:"Because every play has a cast."
        }}/>
        <Joke structure= {{
            question:"Did you hear about the claustrophobic astronaut?",
            punchline:"He just needed a little space."
        }}/>
        <Joke structure= {{
            question:"",
            punchline:"A dyslexic man walks into a bra."
        }}/>
      </div>
  );
}

export default App;
