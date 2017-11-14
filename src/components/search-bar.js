import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render(){
    //First example
    //Component updates state but only when the component's onChange even fires. Input value does not update. Only an event fires
    // return (
    //   <div>
    //     <input onChange={ event => this.setState({ term: event.target.value }) } />
    //     <br />
    //     <p>Value: { this.state.term }</p>
    //   </div>
    // );

    //Second example
    //Controlled Component
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
  //Important! Changing state causes Component to re-render
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;