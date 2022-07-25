const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.header-left_nav')
const heroImage = document.querySelector('#hero-image')
const showNavbar = () =>{
    navbar.display = "block"
    console.log(navbar)

}

function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth < 900) {
      // Then log this message to the console
      console.log('Media Query Matched!')
      heroImage.src ="./images/image-hero-mobile.png"
    }else if (window.innerWidth > 900){
        heroImage.src ="./images/image-hero-desktop.png"


    }
  }

hamburger.addEventListener('click',showNavbar)
window.addEventListener('resize',checkMediaQuery)
checkMediaQuery();