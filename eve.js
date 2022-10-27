var heading=document.getElementById("head");
var btn=document.getElementById("btn");
// btn.addEventListener("click",changecolor);
// heading.addEventListener("mouseover",changeBG);
// //function to change color
// function changecolor(){
//     heading.style.color="green";
// }
// function changeBG(){
//     heading.style.backgroundColor="yellow";
// }
btn.addEventListener("click",function(){
    heading.style.color="red";
});
heading.addEventListener("mouseover",function(){
    heading.style.backgroundColor="violet";
});