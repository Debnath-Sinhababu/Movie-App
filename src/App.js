import Banner from "./banner";
import Movielist from "./movielist";
import Navbar from "./navbar";
import React from "react";
import Footer from "./footer";
import { useState } from "react";
import Favourite from "./favourite";
import ReactDOM from "react-dom/client";

function App(){
  let[page,changepage]=useState([1]);
  let updatepage=(obj)=>{
  let arr=[...obj];
  changepage(arr);
  }
  return (
    <div>
      <Navbar/>
      <Banner arrpage={page}/>
      <Movielist arrpage={page}/>
      <Footer updatepage={updatepage} arrpage={page}/>
    
    </div>
  )
}
export default App;