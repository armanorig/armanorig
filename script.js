function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Video Editor",
    "Graphic Designer",
    
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
   function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
}
    else{
        setTimeout(eraseText, 1000)
    }
}
  
  let menuIcon = document.querySelector('#menu-icons');
  let navbar = document.querySelector('.navbar');
  
  let section = document.querySelectorAll('.section');
  let navLinks = document.querySelectorAll('.header nav a');
  
  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = window.offsetTop - 150;
          let height = window.offsetHeight;
          let id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height){
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                  
              })
          }
      })
  }
  
  function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter