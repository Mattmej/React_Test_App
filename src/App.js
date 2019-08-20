import React, {Component}  from 'react';
import PageItem from './Components/PageItem';

// This is a component that consists of a bulleted point.
import StateItem from './Components/StateItem';

import logo from './logo.svg';
import './App.css';

// I will now be practicing how to change state dynamically.

class App extends Component { 

  // The state has multiple properties.
  state = {
    myString: ''
  }



  render() {

    // Here, I will create a string to hold the current state
    let stateString = this.state.myString;

    return (
      <div>
        {stateList}
        <PageItem item={'This is more stuff.'} />
      </div>
    )
  }
}

export default App;
