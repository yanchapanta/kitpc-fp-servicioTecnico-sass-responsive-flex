

/* 

let addpar=
addpar.style.cssText="background-color: black; color: white;" */



let ubicacionPrincipal = window.pageYOffset; //0
 /* 
   
//   AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    const nav=document.querySelector('.nav')
    const div=document.querySelector('.top__logo')
         
    
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        nav.style.cssText='position:fixed;top:0%;width:100%'
        div.style.cssText='margin-top:50px'
        // document.getElementsByTagName(".nav")[0].style.top = "102px"
    }else{
        nav.style.cssText='position:fixed;top:-50%'
        // document.getElementsByTagName(".nav")[0].style.top = "-500px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})   */

// Menu

/* let enlacesHeader = document.querySelectorAll(".menu")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
}) */
/* let ubicacionPrincipal = window.pageYOffset; //0

if (ubicacionPrincipal>102) {
    ubicacionPrincipal = window.pageYOffset; 
console.log(ubicacionPrincipal)
    const nav=document.querySelector('.nav')
 nav.style.cssText='position:fixed;top:0'
} */