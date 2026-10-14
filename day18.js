const btn=document.getElementById("main");
const out=document.getElementById("box");
let count=1;

btn.addEventListener("click",function(){
      
      console.log("button is clicked");
    //   btn.style.backgroundColor="aqua";
    btn.classList.toggle("btnclr");
    out.textContent="The Button has been Clicked";
});