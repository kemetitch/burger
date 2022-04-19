var li=document.querySelectorAll(".menu .food ul li");
var image=document.querySelector(".description .image img");
li.forEach(com=>{
    com.addEventListener("click",function(e){
    li.forEach(l=>{
        l.classList.remove("active")
    })
    e.target.classList.add("active")
    // com.classList.remove("active")
    image.src=`images/${e.target.dataset.type}`;
    });
});