function splittext(){
var h1=document.querySelectorAll("#text h1");

h1.forEach(function(elem){

    var clutter="";
    var text=elem.textContent.split("");
    text.forEach(function(elm){
        clutter+=`<span>${elm}</span>`
    })
    console.log(clutter);
elem.innerHTML=clutter;
});
}
function cardsmaker(){
var arr=[{pic:"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
        {pic:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
        {pic:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
        {pic:"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"},
        {pic:"https://images.unsplash.com/photo-1581208509730-ea918b007133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"},
        {pic:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        // {pic:"https://images.unsplash.com/photo-1581208509730-ea918b007133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"},
        // {pic:"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"},
        // {pic:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
        // {pic:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
        // {pic:"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
]
var clutter="";
arr.forEach(function(dets){
clutter+=`
<div id="cards-info">
<img src="${dets.pic}" alt="This is an Img">     
</div>
`
})
document.querySelector("#page2-center").innerHTML=clutter;
}

function page1animation(){

var tl1=gsap.timeline();
tl1
.from("#text h1 span",{
    opacity:0,
    duration:1,
    stagger:0.1,
    scale:1.4,
    color:"red",
    ease:Expo.easeInOut,

})
.from("#upeernav",{
    opacity:0,
    y:10,
    duration:0.5,
    stagger:0.1,
})
.from("#page1-center-elem",{
    opacity:0,
    duration:1,
    scale:1.5,
    rotate:90,
},"mar")
.from(".info-para p",{
    opacity:0,
    duration:0.2,
    ease:Expo.easeInOut,

},"mar")

}
function page2animation(){

gsap.from("#page2-center #cards-info img",{
    scrollTrigger:{
        trigger:"#page2",
        start:"0% 70%",
        end:"bottom 50%",
        // markers:true,
        scrub:1,

    },
    duration:2,
    // opacity:0,
    x:600,
    stagger:0.2,
    ease:Expo.easeOut,
})
gsap.to("#page2 .text h4",{

    scrollTrigger:{
        trigger:"#page2",
        // start:"0% 70%",
        // end:"bottom 50%",
        scrub:2,
    },
    x:-1000,
    ease:Expo,

})


}








splittext();
cardsmaker();
page1animation();
page2animation();
