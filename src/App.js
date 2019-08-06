import React, {Component}  from 'react';
import PageItem from './Components/PageItem';
import StateItem from './Components/StateItem';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component { 

  state = {
    pageText: "This is text.",
    secondPageText: "This is the second line of text.",
    thirdPageText: "This is the third line of text."
  }



  render() {

    const stateItems = [...Object.values(this.state)];

    const stateList = (
      <div>
        {stateItems.map((stateItem) => {
          return <StateItem stateItem={stateItem} />
        })}
      </div>
    )

    return (
      <div>
        {/* <p>{this.state.pageText}</p> */}
        <div>
          {/* <li>{this.state.map(stateItem => {
            return <StateItem 
              stateItem={stateItem}
            />
          })}</li> */}
{/* 
          {stateItems.map((stateItem) => {
            return 
              <StateItem stateItem={stateItem} />
            
          })} */}

          {stateList}

        </div>
        <PageItem item={'This is more stuff.'} />
      </div>
    )
  }
}

export default App;
