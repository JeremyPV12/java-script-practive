/*function cambiarTexto(){
    let hola=document.getElementById("parrafo")
    hola.innerHTML="Hola"
    hola.textContent="Texto cambiado"
    hola.style.color = "blue";
}*/


/* let withID=document.getElementById("pa-1")
withID.innerHTML="NOSE QUE PONER PA"

let withClass=document.getElementsByClassName("parrafo")
withClass[1].innerHTML="THES BEST FOOTBALL PLAYER IS LIONEL MESSI"

let withEtiqueta=document.getElementsByTagName("p")
withEtiqueta[2].innerHTML="I like to dance" */

/* function cambiarValor(){
    let Again=document.getElementById("Parrafo-1")
    if(Again.innerHTML=="la vida es una bolsa de papel"){
        Again.innerHTML="Cambiando"
    }
    else{
        Again.innerHTML="la vida es una bolsa de papel"
    }
} */

/* function cambiando(){
    let bottle=document.getElementsByClassName("container")

    if(bottle[0].innerHTML=="Phone"){
        bottle[0].innerHTML="I don't have money"
    }
    else{
        bottle[0].innerHTML="Phone"
    }
} */

/* let number = document.getElementById("content");
let numero = parseInt(number.innerHTML);

function more(){
    numero++;
    number.innerHTML = numero;
}

function less(){
    
    if(numero<=0){
        number.innerHTML = 0;
    }
    else{
        numero--;
        number.innerHTML = numero;
    }
}

function reset(){

    number.textContent = 0;
} */




/* let contadorElemento = document.getElementById("contador");
let contador = parseInt(contadorElemento.textContent);

function incrementar() {
    
    
    contador++;
    contadorElemento.innerHTML = contador;
  }

  // Función para decrementar el contador
  function decrementar() {
    let contadorElemento = document.getElementById("contador");
    let contador = parseInt(contadorElemento.textContent);
    contador--;
    contadorElemento.textContent = contador >= 0 ? contador : 0;
  }
 */





const h5=document.createElement("h5")
console.log(h5)

const textNood=document.createTextNode("Hola soy un h5")

h5.appendChild(textNood)

const body=document.querySelector(".bg-blue-200")
body.appendChild(h5)


function crear(){
    body.classList.add(h5)
}

function eliminar(){
    body.classList.remove(h5)
}

