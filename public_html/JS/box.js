
const imagenes = document.querySelectorAll('.img-gallery');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagenes-light');
const menu1 = document.querySelector('.menu');




imagenes.forEach(image => {
    image.addEventListener('click', ()=> {
      NuevaImagen(image.getAttribute('src')) ;
    });
});

contenedorLight.addEventListener('click', (a)=>{
    if (a.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    menu1.style.opacity = '1';
    } 
} );

const NuevaImagen = (image)=>{
    imagenesLight.src = image;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
      menu1.style.opacity = '0';
};
    
 

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
   var verdadero= true; 
  var falso = false; 
  if (str1.length === str2.length ){
      return verdadero; 
  }
  return falso; 
  
  
}