import React, { useEffect } from "react";
import { useState } from "react";

function Component(obj){
  

 

 // !localStorage.getItem('movieapp').includes(obj.obj.id) && 
   
  


    
    
    let [hoverhere, changehover] = useState({ hover: "" });
   
    let getapiarr=JSON.parse(localStorage.getItem('apidata'));
   
    function storestorage(id){
     
       let a=JSON.parse(localStorage.getItem('movieapp'));
       if( a!=null && a.includes(id)){
        let arr=a.filter((ele)=>
        ele!=id
        
        )
        localStorage.setItem('movieapp',JSON.stringify(arr));
       }
       else if( a!=null && !a.includes(id)){
        a.push(id);
        localStorage.setItem('movieapp',JSON.stringify(a))
       }
       else{
         let arr=[];
         arr.push(id);
         localStorage.setItem('movieapp',JSON.stringify(arr))
       }
      // console.log(JSON.parse(localStorage.getItem('movieapp')));
    //    console.log(localStorage);  
  
 let copyarr=getapiarr.filter((apiobj)=>{
        if(apiobj.id==id){
          return true;
        }
    })  
    console.log(copyarr)
  let ar=JSON.parse(localStorage.getItem('clonemovie'));
   
    if(ar!=null){
      let temparr=ar.filter((tempobj)=>{
          return tempobj.id!=id
      })
      console.log(temparr)
      if(temparr.length==ar.length){
        ar.push(copyarr[0]);
        localStorage.setItem('clonemovie',JSON.stringify(ar))
      }
      else{
       
      localStorage.setItem('clonemovie',JSON.stringify(temparr))
      }
    }
   
    else if(ar==null){
      let arr=[];
      arr.push(copyarr[0]);
      localStorage.setItem('clonemovie',JSON.stringify(arr));
    }
    console.log(JSON.parse(localStorage.getItem('clonemovie')));
    }    
        
   
    return(
        <div
            className="card"
            style={{
              width: "30rem",
              marginRight: "3rem",
              position: "relative",
              marginTop: "30px",
              
              height:'30rem'
            }}
            onMouseEnter={() => {
               
              changehover({ hover: obj.obj.id });
            }}
            onMouseLeave={() => {
              changehover({ hover: ""});
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${obj.obj.backdrop_path}`}
              className="card-img-top"
              style={{ width:'100%',height:'100%' }}
              alt="..."
            />
            <div
              className="card-body"
              style={{ position: "absolute", top: "30vh", left: "20px" }}
            >
              {hoverhere.hover == obj.obj.id && 
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                
                  storestorage(obj.obj.id);
                 
                  }}
                >
                 {JSON.parse(localStorage.getItem('movieapp'))==null?'Add to favourite': JSON.parse(localStorage.getItem('movieapp')).includes(obj.obj.id)?'Remove from favourite':'Add to favourite'}
                </button>
              }
            </div>
            <div
              style={{
                position: "absolute",
                top: "10px",
                color: "white",
                left: "20px",
                fontSize: "20px",
              }}
            >
              {obj.obj.title}
            </div>
          </div>
        );
            }

  export default Component;              
    
   
     
