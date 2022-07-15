const navMobile = document.querySelector('.nav-mobile');
const hamburgerIcon = document.querySelector('.nav-icon__hamburger');
const closeIcon = document.querySelector('.nav-icon__close');

hamburgerIcon.addEventListener('click', ()=>{
 hamburgerIcon.style.display="none";
 closeIcon.style.display="block";
 navMobile.classList.add('active')
})

closeIcon.addEventListener('click', ()=>{
 closeIcon.style.display="none";
 hamburgerIcon.style.display="block";
 navMobile.classList.remove('active')
})