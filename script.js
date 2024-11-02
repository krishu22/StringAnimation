var string = document.querySelector("#stringArea");

var iPath = `M 30 150 Q 840 150 1650 150`;
var fPath = `M 30 150 Q 840 150 1650 150`;

string.addEventListener("mousemove",function(dets){
        iPath = `M 30 150 Q ${dets.x} ${dets.y} 1650 150`;
        gsap.to("svg path",{
                attr:{d:iPath},
                duration:0.5,
                ease:"power3.out"
        })
});

string.addEventListener("mouseleave",function(){
        gsap.to("svg path",{
                attr:{d:fPath},
                duration:2,
                ease:"elastic.out(1,0.17)"
        })
});




