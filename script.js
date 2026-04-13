function revealSections(){
  let sections = document.querySelectorAll(".reveal");

  for(let i=0;i<sections.length;i++){
    let top = sections[i].getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      sections[i].classList.add("active");
    }
  }
}

window.addEventListener("load", function(){
  revealSections();
});

window.addEventListener("scroll", function(){
  revealSections();
});



let navLinks = document.querySelectorAll(".nav-links a");
let allSections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){
  let current = "";

  for(let i=0;i<allSections.length;i++){
    let sectionTop = allSections[i].offsetTop - 120;

    if(window.scrollY >= sectionTop){
      current = allSections[i].getAttribute("id");
    }
  }

  for(let i=0;i<navLinks.length;i++){
    navLinks[i].classList.remove("active");

    if(navLinks[i].getAttribute("href") === "#" + current){
      navLinks[i].classList.add("active");
    }
  }
});



for(let i=0;i<navLinks.length;i++){
  navLinks[i].addEventListener("click", function(e){
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior:"smooth"
    });
  });
}



let buttons = document.querySelectorAll(".btn");

for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click", function(){
    this.style.transform = "scale(0.95)";

    setTimeout(()=>{
      this.style.transform = "scale(1)";
    },150);
  });
}