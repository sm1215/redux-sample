import React, { Component } from 'react';

//class based component, different than a plain function based component
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render(){
    //First example
    //Component has its state updated but only when the component's state changes, input value does not update. Only an event fires
    // return (
    //   <div>
    //     <input onChange={ event => this.setState({ term: event.target.value }) } />
    //     <br />
    //     <p>Value: { this.state.term }</p>
    //   </div>
    // );

    //Second example
    //Controlled Component
    //this.setState causes Component to re-render
    //value of input is set to new value of this.state.term
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='Search'
        />
      </div>
    );
  }

  //Can define event handlers here, as well in the onChange property
  onInputChange(term){
    console.log(event.target.value);
  }
};

export default SearchBar;