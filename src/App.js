import React, {Component}  from 'react';
import StringInput from './Components/StringInput';
import './App.css';

// I will now be practicing how to change state dynamically.
// It is important to indirectly change the state, 
// possibly via a function.

class App extends Component { 

  state = {
    myString: ''
  }

  // Function to change the state of the app
  readString = (ourStateString) => {
    this.setState({
      myString: ourStateString
    });
  }

  render() {

    // Here, I will create a string to hold the current state
    let stateString = this.state.myString;

    return (
      <div>

        {/* An input element to change the app's state. See StringInput component. */}
        <StringInput
        changed={(event) => this.readString(event.target.value)} /> 

        {/* Display the current state on the page. */}
        {stateString}
      </div>
    )
  }
}

export default App;
