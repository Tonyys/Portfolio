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

// bio photo

const photo = document.querySelector('.bio__right')
const photoInner = document.querySelector('.bio__photo')


// photo.addEventListener('mousemove',function (e){
//     cx = window.innerWidth / 2
//     cy = window.innerHeight / 2
//     photoW = photo.offsetWidth
//     photoH = photo.offsetHeight
//     centerX = photoW / 2
//     centerY = photoH / 2
//     // console.log(centerX)
//     clientX = e.pageX
//     clientY = e.pageY
//
//     tiltX = (cx + centerX + 85) - clientX
//     tiltY = cy - clientY
//     console.log(tiltX, tiltY)
//     photoInner.style.transform = 'translate(' + -tiltX / 12 + 'px,' + -tiltY / 12 + 'px) scale(1.1)'
//     if (tiltX >= 270) {
//          photoInner.style.transform = 'translate(' + 0 + 'px,' + -tiltY / 12 + 'px) scale(1.1)'
//     }
// })

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

