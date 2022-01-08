// console.log("object");

let open = document.querySelector("#open");
let close = document.querySelector("#close");
let navbar=document.querySelector(".navbar");

open.addEventListener("click",()=>{
      navbar.classList.toggle("active");
      close.style.display="block";
      open.style.display="none";

});

close.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    open.style.display="block";
    close.style.display="none";

});
let preloader =document.querySelector(".preloader");
window.onload=()=>{
   preloader.style.display="none";
}