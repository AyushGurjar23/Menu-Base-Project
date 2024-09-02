  // gsap.from(".detial h3",{
  //   x:200,
  //   duration:3,
  //   opacity: 0,
  //   delay:0.5,

  // })
  gsap.from(".detial h1",{
    x:-120,
    color: "crimson",
    delay:0.5,
    duration:3,
    opacity: 0,
  })
  gsap.from(".detial p",{
    duration:5,
    delay:0.5,
    opacity: 0,
  })


  gsap.from("#git i",{
     x: -1200,
     duration:1.5,
     delay:0.5
  })

  gsap.from("#li i",{
    x: -1200,
    duration:1.5,
    delay:1
 })
    gsap.from("#x i",{
    x: -1200,
    duration:1.5,
    delay:1.5
 })


 gsap.to(".ani h1",{
  transform:"translateX(-150%)",
  
    scrollTrigger:{
    trigger:".box_3",
    scroller:"body",
    start:"top 0%" ,
    end:"top -100%",
    scrub:2,
    pin:true
  }
  })
  
  

let text = {
    strings: ["Programmer", "Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
};

let typed = new Typed(".loop", text);
// Starry Background Animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = document.body.classList.contains('dark-theme') ? 'blue' : 'red';

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate();

// Theme Toggle Functionality
const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});
