import React from "react";
import { useState } from "react";
import { movies } from "./moviedata";
import { useEffect } from "react";
import axios from "axios";

function Banner(props) {
  let[apidata1,storedata1]=useState([]); 
  
  let style1 = {
    width: "100vw",
    position: "relative",
  };
  let style2 = {
    width: "100vw",
    height: "60vh",
  
    marginLeft:20
  };
  let style3 = {
    position: "absolute",
    top: '5vh',
    left: '20vw',
    width:'60vw'
  };

  useEffect(()=>{
    const res=axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c7bac8032b974efff91b11702e9b48fc&language=en-US&page=${props.arrpage.length}`);
    res.then((data)=>{
    
      storedata1(data.data.results);
     
    })
  },[props.arrpage.length])

  let movie=movies.results;
 let i= Math.floor(Math.random()*20);
  return (
    
      <div className="card" style={style1}>
        
      {
       apidata1.length>0 && <img
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${apidata1[0].backdrop_path}`}
          className="card-img-top"
          style={style2}
          alt="..."
        /> 
      }
      { apidata1.length>0&&
        <div className="card-body" style={style3}>
          <h1 className="card-title" style={{width:'100%',color:'white',wordBreak:'break-word'}}>{apidata1[0].original_title}</h1>
          
        </div>
}
        
          <h1 style={{marginLeft:'50vw',fontWeight:'Bold'}}>Trending</h1>
        
      </div>
    
  );
}
export default Banner;
