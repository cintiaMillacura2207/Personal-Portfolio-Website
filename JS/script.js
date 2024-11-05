let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 
let previousTitle = document.title

window.addEventListener('blur', () =>{
    previousTitle = document.title
    document.title = '¡No te vayas! ¡vuelve!'
})

window.addEventListener('focus', () =>{
    document.title = previousTitle
})

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }

    })
 

}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// Circle skill 
const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i=0; i < dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    } 
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

