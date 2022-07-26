const readMoreBtn = document.querySelector('.btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})