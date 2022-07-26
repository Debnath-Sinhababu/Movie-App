import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Footer(obj){
    let[next,setnext]=useState([1]);
    
    let style2={
       display:'flex',
       width:'100%',
       justifyContent:'center',
       margin:10,
       padding:10
      }
     
      function clicknext(){
        let n;
        if(obj.arrpage.length==next.length){
        n=[...next,next.length+1];
        setnext(n);
        obj.updatepage(n);
        }
        else{
          n=[...obj.arrpage,obj.arrpage.length+1];
          obj.updatepage(n);
        }
        let allspan=document.querySelectorAll('span');
        let spanlist=[...allspan];
        console.log(spanlist);
        spanlist.map((element)=>{
         if(element.style.color=='red'){
           element.style.color='green';
         }
         return element;
        })
         let span=document.querySelector(`.hello${n.length-1}`);
            console.log(span);
        span.style.color='red';
        
      }
      function clickprev(){
        if(next.length==1){
            return;
        }
      let ele=next.pop();
       let newarr=next.filter((e)=>{
         return e!=ele;
       })
       obj.updatepage(newarr);
       setnext(newarr);
      }
      let moveatpage=(index,event)=>{
        let arr=next.filter((ele,idx)=>{
             return idx<=index;
        })
        obj.updatepage(arr);
     
      }
      
    return(
        
        <div style={style2}>
            <span style={{color:'green',cursor:'pointer',marginRight:10}} onClick={clickprev}>previous</span>
            <div>
            { next.map((ele,index)=>{
              return( <span style={{marginRight:10,cursor:'pointer'}} className={`hello${index}`} onClick={()=>{
               let allspan=document.querySelectorAll('span');
               let spanlist=[...allspan];
               console.log(spanlist);
               spanlist.map((element)=>{
                if(element.style.color=='red'){
                  element.style.color='green';
                }
                return element;
               })
                let span=document.querySelector(`.hello${index}`);
                   console.log(span);
               span.style.color='red';
              
                moveatpage(index)}}>{ele}</span>
              )
            })
             
            }
            </div>
            
        
        <span style={{color:'green',cursor:'pointer'}} onClick={clicknext}>next</span>
      </div>
    
       
    )

}
export default Footer;