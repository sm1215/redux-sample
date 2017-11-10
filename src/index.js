import React from 'react';
import ReactDOM from 'react-dom'; //importing a library pulls from node_modules

import SearchBar from './components/search-bar'; //import self-created files requires a relative path reference

//1. Create a new component. This component should produce some HTML
const App = () => {
  // return <div>Hi!</div>; //It's valid JSX to just list what look like HTML tags, no strings needed. JSX is an extension or subset or whatever of XML
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//2. Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));