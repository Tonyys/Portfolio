//Welcome
const welcomeBtn = document.querySelector('.welcome__btn')
const header = document.querySelector('.header')
window.addEventListener('scroll',function (){
    console.log(window.scrollY)

})
welcomeBtn.addEventListener('click',function (e) {
    e.preventDefault()
    document.querySelector('.welcome').classList.remove('active')
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
const contentRight = document.querySelector('.bio__right')

cubeBtn.addEventListener('click',function () {
    contentLeft.classList.add('active')
    contentRight.classList.add('active')
    cubeBtn.classList.remove('active')
})
