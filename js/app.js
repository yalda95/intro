const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.header-left_nav')
const heroImage = document.querySelector('#hero-image')
const closeBtn = document.querySelector('#close')
const featuresBtn = document.querySelector('#features')
const featuresContent = document.querySelector('#features-content')
const compnayBtn = document.querySelector('#company')
const compnayContent = document.querySelector('#compnay-content')


const showNavbar = () =>{
    navbar.style.display = "block"
    closeBtn.style.display = "block"
    console.log(navbar)

}

const closeNavbar = () => {
    navbar.style.display = "none"
}
const showMenu = () => {
    
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
featuresBtn.addEventListener('click',() =>{
 featuresContent.classList.toggle('block')
})
compnayBtn.addEventListener('click',() => {
    compnayContent.classList.toggle('block')

})
window.addEventListener('resize',checkMediaQuery)
checkMediaQuery();

// Close the dropdown if the user clicks outside of it

document.addEventListener('click',function(e) {
    console.log(e)
    if (!e.target.matches('#features') ) {
          if (featuresContent.classList.contains('block') ) {
            featuresContent.classList.remove('block');
          }
        }
    
    if(!e.target.matches('#company')) {
        if(compnayContent.classList.contains('block')) {
            compnayContent.classList.remove('block')
        }
    }
})







