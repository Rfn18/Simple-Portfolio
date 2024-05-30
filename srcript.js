let project = document.querySelector(".project");
project.addEventListener("click", () => {
  location.href = "http://neuronclass.rf.gd/";
});

let a = document.querySelector(".head-a");
let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");
let side = document.querySelector(".head-a");
ul.addEventListener("click", () => {
  hamburger.classList.toggle("ham");
  document.querySelector(".ham-1").classList.toggle("ham1");
  document.querySelector(".ham-2").classList.toggle("ham2");
  document.querySelector(".ham-3").classList.toggle("ham3");
  side.classList.toggle("side");
});
// scroll animation

document.addEventListener('scroll', () => {
  let m2 = document.querySelector('.main2');
  let screens = m2.getBoundingClientRect().top;

  let heighst = window.innerHeight / 3;
  if (screens < heighst) {
    m2.classList.add('active')
  } else {
    m2.classList.remove('active');
  }
})

document.addEventListener('scroll', () => {
  let m3 = document.querySelector('.main3');
  let screens = m3.getBoundingClientRect().top;

  let heighst = window.innerHeight / 2;
  if (screens < heighst) {
    m3.classList.add('active')
  } else {
    m3.classList.remove('active');
  }
})



