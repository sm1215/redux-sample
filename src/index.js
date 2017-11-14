//importing a library pulls from node_modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import self-created files requires a relative path reference
import Secrets from './secrets.js';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = Secrets().apiKey;

//1. Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
      //ES6 interprets this as this.setState({ videos: videos }), where the key and value share the same name
    });
  }

  // return <div>Hi!</div>; //It's valid JSX to just list what look like HTML tags, no strings needed. JSX is an XML/HTML-like syntax.
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        {/*
          JSX passing props
          When the state changes and this component is re-rendered, the prop 'videos' will be updated and passed to the VideoList component
        */}
        {/* Also, to write comments in JSX, you need to wrap a JS comment in a block. Great. */}
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//2. Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));