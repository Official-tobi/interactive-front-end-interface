function lerp(start,end,t){
    return start * (1 - t) + end * t; 
}
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const imgContainer = document.querySelector(".img-container")
body.addEventListener("mousemove",(e)=>{
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    let width = cursor.clientWidth;
    let height = cursor.clientHeight;
    cursor.style.marginLeft =`-${width/2}px`;
    cursor.style.marginTop =`-${height/2}px`;
})
body.addEventListener("mousemove",(e)=>{
    imgContainer.style.transform = `translate3d(${-e.clientX*0.5}px, ${-e.clientY*0.5}px,0px)`;
})
body.addEventListener("mouseleave",()=>{
    cursor.style.opacity = `0`;
})
body.addEventListener("mouseenter",()=>{
    cursor.style.opacity = `1`;
})
let fximage = document.querySelector(".fximage")
body.addEventListener("mousemove",(e)=>{
    fximage.style.boxShadow = `${e.clientX*0.0005}px ${e.clientY*0.0005}px`
})