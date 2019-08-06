import React, {Component}  from 'react';
import PageItem from './Components/PageItem';

// This is a component that consists of a bulleted point.
import StateItem from './Components/StateItem';

import logo from './logo.svg';
import './App.css';

// Here, I will be practicing how to display a state's properties
// as bullet points in the DOM.

class App extends Component { 

  // The state has multiple properties.
  state = {
    pageText: "This is text.",
    secondPageText: "This is the second line of text.",
    thirdPageText: "This is the third line of text."
  }



  render() {

    // First, store the state's properties in an array.
    const stateItems = [...Object.values(this.state)];

    // Then, create a list of StateItem components
    // by taking the stateItems array
    // and executing a method on every item in the array.
    const stateList = (
      <div>
        {stateItems.map((stateItem) => {
          return <StateItem stateItem={stateItem} />
        })}
      </div>
    )

    return (
      <div>
        {stateList}
        <PageItem item={'This is more stuff.'} />
      </div>
    )
  }
}

export default App;
