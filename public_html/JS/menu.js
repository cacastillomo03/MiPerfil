const menu = document.querySelector('.menu');
const header = document.querySelector('.menu_navegacion');

console.log(menu);
console.log(header);


menu.addEventListener('click',()=>{
    header.classList.toggle("spread");
});

window.addEventListener('click', e=>{
    if(header.classList.contains('spread') && e.target !== header  && e.target !== menu) {
            header.classList.toggle("spread");
            }
});


