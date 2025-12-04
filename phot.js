let follow = document.querySelectorAll(".follow");


follow.forEach((item)  =>{
    item.addEventListener("mouseenter",function (){
        gsap.to(item.childNodes[3],{
            opacity:1,
            scale:1,
        });
    });
    item.addEventListener("mouseleave",function(){
        gsap.to(item.childNodes[3],{
            opacity:0,
            scale:0,
        });
    });
    item.addEventListener("mousemove",function(dest){
       gsap.to(item.childNodes[3],{
        x: dest.x - item.getBoundingClientRect().x - 50,
        y: dest.y - item.getBoundingClientRect().y - 100,

       }); 
    });
}) ;

