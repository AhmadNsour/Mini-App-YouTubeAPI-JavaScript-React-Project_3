import React from "react";
import { SearchBar, VideoList, VideoDetail , Header} from "./components";
import youtube from "./api/youtube";
import "./App.css"


class App extends React.Component{
  state={
    videos: [],

    selectedVideo: null,

  }

  videoSelected =( video) => {

    this.setState({selectedVideo : video});

  }

  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get("search", {
      params:
       {
         part: "snippet",
         maxResults: 4,
         key:"AIzaSyBzBzIVwUU4vN-ZxjAZye4DBzTq_A_eXEY",
         q: searchTerm,
        }
        });
       

  this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});  
  console.log(this.state)
  }
  

  render(){

    const { selectedVideo,videos}= this.state;
    
  return (
    <div>
        <Header
        />
        <SearchBar 
        onFormSubmit={this.handleSubmit} 
        />
      <div className="Main-div">          
          <VideoDetail 
          video={selectedVideo} 
          />
          <VideoList 
          videos={videos} 
          videoSelected={this.videoSelected} 
          />
      </div>
    </div>
  );
}
}
export default App;
