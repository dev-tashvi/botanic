const customize_for = document.getElementById("customize_for")
gsap.set(customize_for,{
    opacity:0
})
const tl = gsap.timeline( { 
   
    scrollTrigger: {
      trigger:customize_for,
      start: "+=100 80%",
      end: "+=200 40%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
    }
    
  });
  
  tl
    .to(customize_for, { opacity: 1, duration: 0.4 })
  ;