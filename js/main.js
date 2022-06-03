//Welcome
const welcomeBtn = document.querySelector('.welcome__btn')
const header = document.querySelector('.header')
welcomeBtn.addEventListener('click',function (e) {
    e.preventDefault()
    document.querySelector('.welcome').classList.remove('active')
    document.querySelector('.bio').style.opacity = '1'
    setTimeout(loadHeader,800)
    function loadHeader (){
        header.classList.remove('load')
        document.querySelector('body').classList.remove('load')
    }
})

//Header fixed

window.addEventListener('scroll',function () {
    if (window.scrollY > 1) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})
//cube animation
const cubeBtn = document.querySelector('.cube')
const contentLeft = document.querySelector('.bio__left')

cubeBtn.addEventListener('click',function () {
    contentLeft.classList.add('active')
    cubeBtn.classList.toggle('active')
})

// header link active
const headerLinks = document.querySelectorAll('.header__link')
const windowHeight = window.innerHeight * 0.50

window.addEventListener('scroll',function (){
    headerLinks.forEach(function (item){
        let currentItem = item
        let itemAttr = currentItem.getAttribute('data-scroll')
        let currentSection = document.querySelector(itemAttr)
        let currentSectionHeight = currentSection.offsetHeight
        if (window.scrollY > currentSection.offsetTop - windowHeight && window.scrollY < currentSection.offsetTop + currentSectionHeight) {
            headerLinks.forEach(function (item){
                item.classList.remove('active')
            })
            currentItem.classList.add('active')
        }
    })
})
headerLinks.forEach(function (item){
    let currentItem = item
    let itemAttr = currentItem.getAttribute('data-scroll')
    let currentSection = document.querySelector(itemAttr)
    item.addEventListener('click',function (e){
        e.preventDefault()
        scrollTo(currentSection)
    })
})
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

