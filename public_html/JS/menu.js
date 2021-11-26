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


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    return num<90; 
}