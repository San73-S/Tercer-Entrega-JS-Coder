const Maso = [

    {
        Valor: 1,
        Palo: "Oro",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Espada",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Basto",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Copa",
        Figura: "Numerica"
    },

    {
        Valor: 10,
        Palo: "Oro",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Espada",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Basto",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Copa",
        Figura: "Sota"
    },

    {
        Valor: 11,
        Palo: "Oro",
        Figura: "Caballo"
    },

    {
        Valor: 11,
        Palo: "Espada",
        Figura: "Caballo"
    },
    
    {
        Valor: 11,
        Palo: "Basto",
        Figura: "Caballo"
    },
    
    {
        Valor: 11,
        Palo: "Copa",
        Figura: "Caballo"
    },
    
    {
        Valor: 12,
        Palo: "Oro",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Espada",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Basto",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Copa",
        Figura: "Rey"
    },

    {
        Valor: 0,
        Palo: "Comodin",
        Figura: "Comodin"
    },

    {
        Valor: 0,
        Palo: "Comodin",
        Figura: "Comodin"
    }

]

const imagenes = [
    { src: 'images/cartas/1.png', alt: 'Numerica' },
    { src: 'images/cartas/2.png', alt: 'Numerica' },
    { src: 'images/cartas/3.png', alt: 'Numerica' },
    { src: 'images/cartas/4.png', alt: 'Numerica' },
    { src: 'images/cartas/5.png', alt: 'Sota' },
    { src: 'images/cartas/6.png', alt: 'Sota' },
    { src: 'images/cartas/7.png', alt: 'Sota' },
    { src: 'images/cartas/8.png', alt: 'Sota' },
    { src: 'images/cartas/9.png', alt: 'Caballo' },
    { src: 'images/cartas/10.png', alt: 'Caballo' },
    { src: 'images/cartas/11.png', alt: 'Caballo' },
    { src: 'images/cartas/12.png', alt: 'Caballo' },
    { src: 'images/cartas/13.png', alt: 'Rey' },
    { src: 'images/cartas/14.png', alt: 'Rey' },
    { src: 'images/cartas/15.png', alt: 'Rey' },
    { src: 'images/cartas/16.png', alt: 'Rey' },
    { src: 'images/cartas/17.png', alt: 'Comodin' },
    { src: 'images/cartas/18.png', alt: 'Comodin' },
];

const figuraDeCartas = ["Numerica", "Sota", "Caballo", "Rey", "Comodin"];

let ronda = "";
let turno = 1;
let msj = "";

class Jugador{

    constructor(id, nombre, vidas, baraja){
        this.id = id;
        this.nombre = nombre;
        this.vidas = vidas;
        this.baraja = baraja;
    }

    verCartas(){
        console.log(`\nCartas de ${this.nombre}`)
        this.baraja.forEach(element => {
            console.log(`${element.Valor} de ${element.Palo}`)
        });
    }

    imprimirCartas(){
        let cadena = "";
        this.baraja.forEach((element, indice) => {
            cadena += `${indice + 1}) ${element.Valor} de ${element.Palo} (${element.Figura})\n`
        });
        return cadena;
    }

}

function repartirCartas(jugador1, jugador2, Maso){

    let posiciones = posicionDeCartasSinRepetir(Maso);
    let arrayAux = [];
    let arrayAux2 = [];
    let j = 0;

    for(let i = 0; i<5; i++){
        arrayAux[i] = Maso[posiciones[j]];
        j+=1;                                   // 'J' se incrementa para dar esa efecto de repartir una carta a la vez para cada uno
        arrayAux2[i] = Maso[posiciones[j]];  
        j+=1;  
    }

    jugador1.baraja= arrayAux;
    jugador2.baraja= arrayAux2;
    return posiciones;
}

function posicionDeCartasSinRepetir(maso){
    let barajaAux = [];
    let cont = 1;
    let num ;
    let flag = false;

    while(cont <= 10){
        num = Math.floor(Math.random() * maso.length);       
        for(let i = 0; i < cont; i++){ 
            if(barajaAux[i] === num){
                flag = true;
                break;
            } else{
                flag = false;
            }
        }

        if(!(flag == true)){
            barajaAux[cont-1] = num;
            cont++;
        }
    }
    return barajaAux;
}

const seleccionDeFigura = (figuraDeCartas) => figuraDeCartas[Math.floor(Math.random() * (figuraDeCartas.length-1))];

/*function seleccionDeCartaATirar(jugador, ronda){
    let posCarta = 0;
    let cartaSeleccionada;
        do{
            posCarta = parseInt(prompt("Jugador " + jugador.nombre + " tus cartas son:\n" + jugador.imprimirCartas() + "\n¿Cuál deseas tirar?"));
            if(posCarta<1 || posCarta>5) alert("Ingreso un numero incorrecto.\nVuelva a ingresar un numero correcto.");
        } while(!(posCarta>=1 && posCarta<=5))

            //alert("\nLa carta que tiro fue " + jugador1.baraja[posCarta-1].Valor + " de " + jugador1.baraja[posCarta-1].Palo); 
            cartaSeleccionada = jugador.baraja[posCarta-1]           
            jugador.baraja.splice(posCarta-1,1);
            alert("El jugador " + jugador.nombre + " tiro 1 " + ronda );
            console.log(jugador.imprimirCartas());
            return cartaSeleccionada;
}

function esMentira(){    
    let respuesta = parseInt(prompt("¿El jugador miente?\n1) Si\n2) No")); 
    return respuesta === 1 ? true : false;
}

function comprobarCarta(carta, ronda){
    console.log(carta.Figura + " " + ronda)
    if( carta.Figura == ronda || carta.Figura == "Comodin"){
        alert("El jugador tiro correctamente un " + carta.Figura);
        return true;        
    } else{
        alert("Es mentira!\nEl jugador tiro " + carta.Figura);
        return false;
    }
}

function mentiroso1(){

    let jugador1 = new Jugador("Santiago", 3);
    let jugador2 = new Jugador("Pedro", 3);
    repartirCartas(jugador1, jugador2, Maso);
    jugador1.verCartas();
    jugador2.verCartas();

    let ronda =seleccionDeFigura(figuraDeCartas);
    let flag = false;
    let cartaJ1, cartaJ2;
    let mentiroso;

    alert("En esta ronda se podran tirar solamente figuras de: " + ronda);
    
    while(mentiroso == null){
        if(jugador2.baraja.length === 0 )  mentiroso = comprobarCarta(cartaJ1, ronda);
        if(flag && esMentira()) mentiroso = comprobarCarta(cartaJ2, ronda);
        if(mentiroso == null) cartaJ1 = seleccionDeCartaATirar(jugador1, ronda);
        console.log("Holanda ", jugador1.baraja.length);
        flag = true;        //El flag pasa a valer true ya que estaba en false para evitar su ejecucion en el primer turno.
        if(jugador1.baraja.length === 0 )  mentiroso = comprobarCarta(cartaJ1, ronda);        
        if(mentiroso == null && esMentira()) mentiroso = comprobarCarta(cartaJ1, ronda);
        if(mentiroso == null) cartaJ2 = seleccionDeCartaATirar(jugador2, ronda);
    }
}*/

function mostrarCartasEnMesa(posiciones){

    const cartas = document.querySelectorAll(".carta");
    let cont = 1;
    flag = true;
    let imagenSeleccionada;
    const reversoDeCarta = "images/cartas/reverso.png";

    cartas.forEach(carta =>{
        const img = document.createElement('img');
        imagenSeleccionada = imagenes[posiciones[cont]]  
        img.src = cont % 2 == 0 ? imagenSeleccionada.src : reversoDeCarta;
        img.alt = imagenSeleccionada.alt;
        img.setAttribute('data-id', posiciones[cont]);
        img.classList.add("carta-individual")
        carta.appendChild(img);

        if(cont == 9 && flag == true) {
            cont = -2;
            flag = false;
        }
        cont+=2;
    })
}

const mensaje = document.getElementById('mensaje');

function mostrarMensaje(texto) {
    mensaje.classList.add('visible');
    mensaje.innerText = texto;
    setTimeout(() => {
    mensaje.classList.remove('visible');
    }, 5000); 
}

function inicioJuego(){
    let jugador1 = new Jugador(1, "Santiago", 3);
    let jugador2 = new Jugador(2, "BOT", 3);
    let posicionesCartas = repartirCartas(jugador1, jugador2, Maso);
    jugador1.verCartas();
    jugador2.verCartas();
    mostrarCartasEnMesa(posicionesCartas);
    ronda =seleccionDeFigura(figuraDeCartas);
    console.log(ronda);
    msj = "En esta ronda se tira: " + ronda;
    mostrarMensaje(msj);
}

inicioJuego();



const cartas = document.querySelectorAll(".carta-individual");
const cartasLineas = document.querySelectorAll(".cartas-lineas");
const mazoEnMeza = document.getElementById("carta-mazo");
let posicionesCartasBot = [0, 1, 2, 3, 4, 5];


function cartaBotAleatoria(){
    let posAux =  Math.floor(Math.random() * posicionesCartasBot.length);
    let numAux = posicionesCartasBot[posAux];
    posicionesCartasBot.splice(posAux, 1);
    return numAux;
}

cartas.forEach((carta, index )=> {
    carta.addEventListener('click', () => {
        let flag = false;
        if(turno == 1 && index >4){
            carta.style.display = "none";
            mazoEnMeza.style.display = "block";
            mazoEnMeza.alt = carta.alt;
            mazoEnMeza.setAttribute('data-id', carta.dataset.id);
            turno = 2;
            flag = true;
        }

        if(turno == 2 && flag){
            let numAux = cartaBotAleatoria();
            if(numAux == 5){
                btnMentira.click();
            } // Falta contemplar cuando el otro jugador tiro todas sus cartas
            cartas[numAux].click();
            console.log(numAux);            
        }

        if(turno == 2 ){            
            carta.style.display = "none";
            mazoEnMeza.style.display = "block";
            mazoEnMeza.alt = carta.alt;
            mazoEnMeza.setAttribute('data-id', carta.dataset.id);
            turno =  1;
        }      
    });    
});  

cartasLineas.forEach((linea, index)=>{
    if(index>5){
        linea.classList.add('turno');
    } 
})

const btnMentira = document.getElementById("btn-mentira");

btnMentira.addEventListener('click',  () =>{
    btnMentira.src = "images/cartas/btn-2.png";

    if(ronda == mazoEnMeza.getAttribute('alt') || mazoEnMeza.getAttribute('alt') == "Comodin" ){
        msj = "El jugador tiro correctamente " + ronda;
    } else{
        msj = "El jugador es un mentiroso!";
    }

    mostrarMensaje(msj);

    // inicioJuego();
    // hay que recetear el mazo y demas variables
})

/* FALTA
* Rival tira cartas automaticamente. LISTO
* Efecto para saber de quien es el turno.
* Mostrar vidas y nombres.
* Resetear mesa.
*/ 