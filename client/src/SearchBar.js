import React, { useState } from "react";

const filteredVideos = (props, query) => {

}

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="search-bar-wrapper">
      <label>Search: </label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
    </div>
  );

  
};



export default SearchBar;
