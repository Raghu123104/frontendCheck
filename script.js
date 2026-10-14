const btn1=document.getElementById("add");
const btn2=document.getElementById("sub");
let  count=1;
const out=document.getElementById("out");
btn1.addEventListener("click",function(e){
    count++;
   out.textContent=count;
//    console.log(e);
//    console.log(e.type);
//    console.log(e.currentTarget);
//    console.log(e.clientX,e.clientY);
console.log(e.target);
console.log(e.currentTarget);
});
btn2.addEventListener("click",function(){
    
    if(count>1){
        count--;
    }
    out.textContent=count;
})