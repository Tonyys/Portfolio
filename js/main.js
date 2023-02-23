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


// bio photo

// const photo = document.querySelector('.bio__right')
// const photoInner = document.querySelector('.bio__photo')
//
//
// window.addEventListener('mousemove',function (e){
//     cx = window.innerWidth / 2
//     cy = window.innerHeight / 2
//     photoW = photo.offsetWidth
//     photoH = photo.offsetHeight
//     centerX = photoW / 2
//     centerY = photoH / 2
//     clientX = e.pageX
//     clientY = e.pageY
//
//     tiltX = (cx + centerX + 85) - clientX
//     tiltY = cy - clientY
//     console.log(tiltX, tiltY)
//     photoInner.style.transform = 'rotateY(' + -tiltX / 100 + 'deg) rotateX(' + tiltY / 100 + 'deg)'
//
// })

//cube animation
const cubeBtn = document.querySelector('.cube')
const contentLeft = document.querySelector('.bio__left')

cubeBtn.addEventListener('click',function () {
    contentLeft.classList.add('active')
    cubeBtn.classList.toggle('active')
})

//Header fixed

window.addEventListener('scroll',function () {
    if (window.scrollY > 1) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

// header burger

const burger = document.querySelector('.burger')
const burgerContent = document.querySelector('.mobile')

burger.addEventListener('click',function(){
    burger.classList.toggle('active')
    burgerContent.classList.toggle('active')
    document.querySelector('body').classList.toggle('overflow')
})


// header link active
const headerLinks = document.querySelectorAll('.header__link')
const mobileLinks = document.querySelectorAll('.mobile__link')
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
mobileLinks.forEach(function (item){
    let currentItem = item
    let itemAttr = currentItem.getAttribute('data-scroll')
    let currentSection = document.querySelector(itemAttr)
    item.addEventListener('click',function (e){
        e.preventDefault()
        scrollTo(currentSection)
        burgerContent.classList.remove('active')
        burger.classList.remove('active')
        document.querySelector('body').classList.remove('overflow')
    })
})
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 10,
        behavior: 'smooth'
    })
}
// Validate
const inpName = document.querySelector('.form__name input')
const inpEmail = document.querySelector('.form__email input')
const inpMess = document.querySelector('.form__mess textarea')
const form = document.querySelector('form')

const regEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let count = 0

document.querySelector('.form__btn').addEventListener('click',function (e){
    e.preventDefault()
    if (inpName.value.length < 2) {
        count--
        inpName.classList.add('active')
    } else {
        count++
        inpName.classList.remove('active')
    }
    if(!isEmail (regEmail, inpEmail.value) || inpEmail.value.length <= 3) {
        count--
        inpEmail.classList.add('active')
    } else {
        count++
        inpEmail.classList.remove('active')
    }
    if (inpMess.value.length < 4){
        count--
        document.querySelector('.form__error').classList.add('active')
    } else {
        count++
        document.querySelector('.form__error').classList.remove('active')
    }
    if (count < 3) {
        count = 0
    }
    if (count === 3){
        sendMail()
        count = 0
        document.querySelector('.popup').classList.add('active')
        form.reset()
    }
})

async function sendMail(){
    let formData = new FormData(form)
    let response = await fetch('mail.php',{
        method: 'POST',
        body: formData
    })
}
document.querySelector('.popup__cross').addEventListener('click',function (){
    document.querySelector('.popup').classList.remove('active')
})
document.querySelector('.popup__exit').addEventListener('click',function (){
    document.querySelector('.popup').classList.remove('active')
})
function isEmail (regex, inp) {
    return regex.test(inp)
}




















