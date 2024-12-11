const body= document.querySelector("body");
const h1= document.querySelector("h1");
const p= document.querySelector("p");
const button=document.querySelector("button");
const img= document.querySelectorAll(".images");


//this is the example for bubbling event
document.querySelector(".go").addEventListener("click",(e)=>{
   console.log(e.target.parentNode);
    e.preventDefault();
    let hrefrem= e.target.parentNode;
    hrefrem.remove();
    console.log("google removed");
    
    
},0)
document.querySelector("#go").addEventListener("click",(e)=>{
   console.log(e.target.parentNode);
   console.log("google div removed");
   let hrefrem= e.target;
    hrefrem.remove();
},0)


//this is the example for capturing event
// document.querySelector(".go").addEventListener("click",(e)=>{
//    console.log(e.target.parentNode);
//     e.preventDefault();
//     let hrefrem= e.target.parentNode;
//     hrefrem.remove();
//     console.log("google removed");
    
    
// },1)
// document.querySelector("#go").addEventListener("click",(e)=>{
//    console.log(e.target.parentNode);
 
//    console.log("google div removed");
// },1)

button.addEventListener("click",(e)=>{
   if(e.target.id=="btn"){
    body.style.backgroundColor="white";
    button.innerHTML="DARK MODE"
    button.style.backgroundColor="white";
    button.style.color="black";
    button.id="btns"
    h1.style.color="black";
    p.style.color="black";
    
   }
   else{
    body.style.backgroundColor="gray";
    button.innerHTML="LIGHT MODE"
    button.style.color="white";
    button.style.backgroundColor="gray";
    button.id="btn"
    h1.style.color="aliceblue";
    p.style.color="aliceblue";
   }
})

img.forEach((remove)=>{
    // console.log(remove);
    remove.addEventListener("click",(e)=>{
       if(e.target.id==="a"){
        console.log(e.target);
        let removeIt=e.target.parentNode;
        removeIt.remove();
       }
    },false)
})



