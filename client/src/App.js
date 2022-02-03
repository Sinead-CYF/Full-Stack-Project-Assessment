import React, { useState } from "react";
import videoData from "./exampleresponse.json";
import Header from "./Header";
import VideoCard from "./VideoCard";
import Footer from "./Footer";
import "./App.css";
import AddVideo from "./AddVideo";
import SearchBar from "./SearchBar";

function App() {

  const [videos, setVideos] = useState(videoData);
  console.log(videos);

  return (
    <div className="App">
      <Header />
      <section>
        <AddVideo/>
        <SearchBar videos={videos}/>
      </section>

      <section className="video-area">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
