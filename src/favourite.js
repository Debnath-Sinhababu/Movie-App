import { useEffect, useState } from "react";
import { movies } from "./moviedata";
import Navbar from "./navbar";
let Favourite = () => {
  let [clonedisplayarr, updateclone] = useState([]);
  let [filterbool,updatefilterbool]=useState(0);
  let style1 = {
    backgroundColor: "blue",

    width: "10vw",
    height: "4vw",
    color: "white",
    textAlign: "center",
  };
  let style2 = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
  };
  let movie = movies.results;
  let geners = {
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ],
  };
 
  // let displayarr=[];
  let [temparr,setTemp] = useState([])
  let [displayarr, setDisplayarr] = useState([]);
  let [localarr,setLocalArr] = useState([])

  // let localarr = ;
   
  useEffect(() => {
    
    let data = JSON.parse(localStorage.getItem('movieapp'))
    setLocalArr(data);

   
    if(localarr===null);
    return;
  console.log(2,'-----');
  },[clonedisplayarr]);

  useEffect(()=>{
    let arr =[];
    let apiarr= JSON.parse(localStorage.getItem('clonemovie'))
    apiarr.map((movieobj) => {
      localarr.map((arrele) => {
       
        if (movieobj.id === arrele) {
          arr.push(movieobj);
          return movieobj;
        }
      });
    });
    
    setDisplayarr(arr);
    if(displayarr==null)
    return;
   },[localarr]);

   useEffect(()=>{

    let temparr1 =[]
    console.log(displayarr);
    displayarr?.map((movieobj) =>
      movieobj?.genre_ids.map((movieele) =>
        geners.genres.map((ele) => {
          if (ele.id === movieele) {
            if (!temparr1.includes(ele.name)) {
              
              temparr1.push(ele.name);
            }
          }
        })
      )
    )
  
   if(filterbool==0)
    setTemp(temparr1);
   },[displayarr]);

 useEffect(()=>{
     let a= JSON.parse(localStorage.getItem('updatename'));
    console.log(1,'--------');
     setDisplayarr(a);
 },[filterbool])
 
  return (
    <div>
      <Navbar />
      <div style={style2}>
        <div
          class="btn-group-vertical"
          style={{ width: "20rem",padding:'1rem',marginRight:'5rem',display:'flex',justifyContent:'center',alignItems:'center' }}
        >
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
            style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItem:'center',flexWrap:'wrap',wordBreak:'break-word'}}
          >
            <button type="button" class="btn btn-outline-primary"  onClick={()=>{
                let arr =[];
                let apiarr= JSON.parse(localStorage.getItem('clonemovie'))
                apiarr.map((movieobj) => {
                  localarr.map((arrele) => {
                   
                    if (movieobj.id === arrele) {
                      arr.push(movieobj);
                      return movieobj;
                    }
                  });
                });
                localStorage.setItem('updatename',JSON.stringify(arr));
                updatefilterbool(0); 

            }}>All Geners</button>
            {temparr.map((tempele) => (
              <button type="button" class="btn btn-outline-primary" style={{border:'1px solid'}} onClick={()=>{
                let allbtn=document.querySelectorAll('button');
                let btnarr=[...allbtn];
                btnarr.filter((btn)=>{
                  if( btn.style.backgroundColor='blue'){
                    btn.style.backgroundColor='grey';
                    btn.style.Color='black';
                   
                  }
                })
                btnarr.filter((btn)=>{
                  if(btn.textContent==tempele){
                    btn.style.backgroundColor='blue';
                    btn.style.color='white';
                    return btn;
                  }
                })
                let arr =[];
                let apiarr= JSON.parse(localStorage.getItem('clonemovie'))
                apiarr.map((movieobj) => {
                  localarr.map((arrele) => {
                   
                    if (movieobj.id === arrele) {
                      arr.push(movieobj); 
                       //---------------------------------------------
                      return movieobj;
                    }
                  });
                }); 
             let newarr=arr.filter((obj)=>{
                 let arr1= geners.genres.filter((gen)=>{
                        if(gen.id===obj.genre_ids[0] && gen.name==tempele){
                          return true;
                       
                        }
                     })
                     return arr1.length!=0
                  
                })
                console.log(newarr);
               localStorage.setItem('updatename',JSON.stringify(newarr));
               updatefilterbool(filterbool+1);
              }}
             
              >
                {tempele}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <input
            type="search"
            placeholder="search"
            style={{
              marginLeft: 0,
              padding: 7,
              textAlign: "center",
               width:'30vw'
            }}
            onInput={(e)=>{
              if(e.target.value==''){
               let arr=JSON.parse(localStorage.getItem('updatename'));
               setDisplayarr(arr); 
              }
              else{
              let arr =[];
              let apiarr= JSON.parse(localStorage.getItem('clonemovie'))
              apiarr.map((movieobj) => {
                localarr.map((arrele) => {
                 
                  if (movieobj.id === arrele) {
                    arr.push(movieobj);
                    return movieobj;
                  }
                });
              }); 
           let newarr=arr.filter((obj)=>{
                 if(obj.original_title.includes(e.target.value)){
                  return true;
                 }
              })
              setDisplayarr(newarr);
            }}
          }
          />

          <input
            type="number"
            name=""
            id=""
            style={{ padding: 7 ,width:'30vw'}}
          />
          </div>
          <table class="table" style={{ width: "70vw" }}>
            <thead>
              <tr class="row">
                <th class="col-2">Title</th>
                <th class="col">Genre</th>
                <th class="col">
                <i class="fa-solid fa-caret-up" onClick={()=>{
                 // let arr=JSON.parse(localStorage.getItem('updatename'));
                  let arr=displayarr.map((obj)=>{
                    return obj;
                  })
                  arr.sort((obj1,obj2)=>{
                      return (obj2.popularity-obj1.popularity)
                  })
                  setDisplayarr(arr);
                }}></i>
                  Popularity
                  <i class="fa-solid fa-caret-down" onClick={()=>{
                   // let arr=JSON.parse(localStorage.getItem('updatename'));
                   let arr=displayarr.map((obj)=>{
                    return obj;
                  })
                    arr.sort((obj1,obj2)=>{
                        return (obj1.popularity-obj2.popularity)
                    })
                    setDisplayarr(arr);
                  }}></i>
                  </th>
                <th class="col">
                <i class="fa-solid fa-caret-up" onClick={()=>{
                 // let arr=JSON.parse(localStorage.getItem('updatename'));
                 let arr=displayarr.map((obj)=>{
                  return obj;
                })
                  arr.sort((obj1,obj2)=>{
                     return (obj2.vote_average-obj1.vote_average)
                  })
                  setDisplayarr(arr);
                }}></i>
                  Rating
                  <i class="fa-solid fa-caret-down" onClick={()=>{
                   // let arr=JSON.parse(localStorage.getItem('updatename'));
                   let arr=displayarr.map((obj)=>{
                    return obj;
                  })
                    arr.sort((obj1,obj2)=>{
                        return (obj1.vote_average-obj2.vote_average)
                    })
                    setDisplayarr(arr);
                  }}></i>
                </th>
                
              </tr>
            </thead>
           
            <tbody
              class="table-group-divider"
              style={{ borderTop: " 3px solid black" }}
            >
           

              {displayarr?.map((movieobj) => {
               // console.log(movieobj);
                return (
                  <tr>
                    <th scope="row" colSpan='2'>
                      <img
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieobj?.backdrop_path}`}
                        style={{ width: "10vw", marginRight: 10 }}
                        alt=""
                      />
                      {movieobj?.original_title}
                    </th>
                    <td>
                      {
                        
                      geners.genres.map((objele) =>
                        movieobj?.genre_ids.map(
                          (ele) =>{
                           
                          return( objele.id === ele && objele.name + " ")}
                        )
                      )}
                    </td>
                    <td>{movieobj?.popularity}</td>
                    <td>{movieobj?.vote_average}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          padding: 10,
                          borderRadius: 20,
                        }}
                        onClick={() => {
                          let temp = JSON.parse(
                            localStorage.getItem("movieapp")
                          );
                         
                          let clonetemparr = temp.filter(
                            (id) => movieobj.id !== id
                          );
                          localStorage.setItem("movieapp", JSON.stringify(clonetemparr));
                          updateclone(clonetemparr);
                        }}
                      >
                        Delete
                      </button>
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Favourite;
