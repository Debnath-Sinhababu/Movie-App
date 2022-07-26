//import { movies } from "./moviedata";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Component from './component'
import { movies } from "./moviedata";
function Movielist(props) {
  
  let [apidata, storedata] = useState([]);
  let movie = movies.results;

  let style1 = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
    overflowX: "hidden",
    paddingLeft: "70px",
  };

  function addtofavourite(id) {}
  useEffect(() => {
    const res = axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c7bac8032b974efff91b11702e9b48fc&language=en-US&page=${props.arrpage.length}`
    );
    res.then((data) => {
      storedata(data.data.results);
      localStorage.setItem('apidata',JSON.stringify(data.data.results));
      console.log(localStorage);
    });
  }, [props.arrpage.length]);
  return (
    <div style={style1}>
      {apidata.map((obj) => {
        return (
          <Component obj={obj}/>
            );
      })}
    </div>
  );
}
export default Movielist;
