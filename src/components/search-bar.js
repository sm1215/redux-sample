import React, { Component } from 'react';

//class based component, different than a plain function based component
class SearchBar extends Component {
  constructor(props){
    //call parent method's constructor, neglecting to call super will throw an error
    super(props);

    //Component can make use of state, 'term' is not a default property, can use whatever you want
    //Directly setting state only occurs inside the constructor. No where else
    this.state = { term: 'Starting Value' };
  }

  render(){
    //first example
    //component has its value updated but only when the state changes, input value does not update. only an event fires
    //side note: setting state outside of constructor should be done through the setter property
    // return (
    //   <div>
    //     <input onChange={ event => this.setState({ term: event.target.value }) } />
    //     <br />
    //     <p>Value: { this.state.term }</p>
    //   </div>
    // );

    //second example
    //controlled component
    //this.setState causes component to re-render
    //value of input is set to new value of this.state.term
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={event => this.setState({ term: event.target.value })}
        />
        <p>Value: { this.state.term }</p>
      </div>
    );
  }

  //can define event handlers here, as well in the onChange property
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
};

export default SearchBar;