//Importing a library pulls from node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

//Importing self-created files requires a relative path reference
import Secrets from './secrets.js';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

//You'll need a Google API key to make this run. Get one and place it here, or ask me and I can share my secrets.js file with you.
const API_KEY = Secrets().apiKey;

//ES6: const are ES6 constants, supposedly immutable except for some instances where arrays can be changed.

//1. Creating a new component. This component should produce some HTML
//This is a class based Component which extends React's Component class.
//You can write simple function based components too, when you don't need the functionality of 'state'
class App extends Component {
  constructor(props){
    //call parent method's constructor by using super, neglecting to call super will throw an error
    super(props);

    //Class based Components can make use of state
    //It is considered good practice to only directly set state in a constructor.
    //If you want to set state elsewhere, like in render, then use the setState function.
    this.state = { videos: [] };
    this.videoSearch('surfboards'); //Just giving a default search for some placeholder content
  }

  //Defining a function here that can be passed to child Components later.
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  //It's valid JSX to just list what look like HTML tags, no strings needed. JSX has an XML/HTML-like syntax.
  //This render function will get called again everytime state changes.
  //JSX tags can be self-closing.
  render() {
    //Adding some lodash to help throttle user input.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    //Everything that is returned needs to be wrapped in a single tag.
    return (
      <div>
        {/* To write comments in a return statement in JSX, you need to wrap a JS comment in a block. */}

        {/* Child Components: These can be passed functions to be used as a callback */}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        {/* The property 'videos' will be updated and passed to the VideoList component on state change (re-render) */}
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//2. Take this Component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));