new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

//modal

let multiLangChoose=document.getElementById('multiLangChoose');
let multiLangBox=document.getElementById('multiLangBox');

function showModal() {
    multiLangChoose.style.display='block';
    setTimeout(function () {
        multiLangBox.classList.add('active');
    },120)
}

multiLangChoose.addEventListener('click',function () {
    this.style.display='none';
    setTimeout(function () {
        multiLangBox.classList.remove('active');
    },120)
})

//select language

let English=document.querySelectorAll('.en');
let Persian=document.querySelectorAll('.persian');
let Turkish=document.querySelectorAll('.turkish');
let Arabic=document.querySelectorAll('.arabic');

function showEnglish() {
    Persian.forEach((item)=>{
        item.style.display='none';
    })
    Arabic.forEach((item)=>{
        item.style.display='none';
    })
    Turkish.forEach((item)=>{
        item.style.display='none';
    })
    English.forEach((item)=>{
        item.style.display='block';
    })
}
function showPersian() {
    Persian.forEach((item)=>{
        item.style.display='block';
    })
    Arabic.forEach((item)=>{
        item.style.display='none';
    })
    English.forEach((item)=>{
        item.style.display='none';
    })
    Turkish.forEach((item)=>{
        item.style.display='none';
    })
}
function showArabic() {
    Persian.forEach((item)=>{
        item.style.display='none';
    })
    English.forEach((item)=>{
        item.style.display='none';
    })
    Arabic.forEach((item)=>{
        item.style.display='block';
    })
    Turkish.forEach((item)=>{
        item.style.display='none';
    })
}
function showTurkish() {
    Persian.forEach((item)=>{
        item.style.display='none';
    })
    English.forEach((item)=>{
        item.style.display='none';
    })
    Arabic.forEach((item)=>{
        item.style.display='none';
    })
    Turkish.forEach((item)=>{
        item.style.display='block';
    })
}