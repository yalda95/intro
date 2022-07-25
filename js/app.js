const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.header-left_nav')
const heroImage = document.querySelector('#hero-image')
const closeBtn = document.querySelector('#close')

const showNavbar = () =>{
    navbar.style.display = "block"
    closeBtn.style.display = "block"
    console.log(navbar)

}

const closeNavbar = () => {
    navbar.style.display = "none"
}

function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth < 750) {
      // Then log this message to the console
      console.log('Media Query Matched!')
      heroImage.src ="./images/image-hero-mobile.png"
      

    }else if (window.innerWidth > 750){
        heroImage.src ="./images/image-hero-desktop.png"
    }
    if(window.innerWidth > 900) {
        navbar.classList.toggle("block");
    }
  }

hamburger.addEventListener('click',showNavbar)
closeBtn.addEventListener('click',closeNavbar)
window.addEventListener('resize',checkMediaQuery)
checkMediaQuery();