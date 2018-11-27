import weblogo from '../img/weblogo.png';
import gitlogo from '../img/github.png';
import lab2 from '../img/Lab2.PNG';
import Husky from '../img/husky.PNG';
import Chat from '../img/chat.PNG';
import Memoria from '../img/memoria.PNG'
import Calculadora from '../img/calculadora.PNG'
import Laberinto from '../img/laberinto.PNG'
import React from '../img/react.PNG'
import TeLaCambio from '../img/telacambio.PNG'

const data = {
    "tarjetas": [
        {
            "indice": 0,
            "img": lab2,
            "nombre": "Woof",
            "desc": "Historia realizada en HTML puro, inspirada en Zork.",
            "link": "http://34.210.35.174/woof/",
            "logo": weblogo
        },
        {
            "indice": 1,
            "img": Husky,
            "nombre": "Syberian Husky",
            "desc": "Dibujo de mi animal preferido. CSS y HTML puro, sin JavaScript.",
            "link": "https://codepen.io/Barrios596/pen/RBjjjp",
            "logo": weblogo
        },
        {
            "indice": 2,
            "img": Chat,
            "nombre": "Chat",
            "desc": "Chat realizado en JavaScript. La información se almacenan en AWS.",
            "link": "https://github.com/Barrios596/Chat",
            "logo": gitlogo
        },
        {
            "indice": 3,
            "img": Memoria,
            "nombre": "Memoria",
            "desc": "Juego de memoria hecho con el Framework React.",
            "link": "https://github.com/Barrios596/Memoria",
            "logo": gitlogo
        },
        {
            "indice": 4,
            "img": Calculadora,
            "nombre": "Calculadora",
            "desc": "Con las operaciones básicas de suma, resta, multiplicación y división.",
            "link": "https://github.com/Barrios596/Calculadora",
            "logo": gitlogo
        },
        {
            "indice": 5,
            "img": Laberinto,
            "nombre": "Laberinto",
            "desc": "Sencillo juego de un laberinto. Mover la 'p' hasta la 'g' con las flechas del teclado.",
            "link": "https://github.com/Barrios596/Laberinto",
            "logo": gitlogo
        },
        {
            "indice": 6,
            "img": React,
            "nombre": "Boilerplate",
            "desc": "Configuración inicial de React para desarrollar aplicaciones web. Incluye algunos ejemplos.",
            "link": "https://github.com/Barrios596/React-Boilerplate",
            "logo": gitlogo
        },
        {
            "indice": 7,
            "img": TeLaCambio,
            "nombre": "Te la cambio",
            "desc": "Proyecto que realicé en Ionic (apps híbridas). Se hizo destinado al intercambio de estampas para el mundial",
            "link": "https://github.com/Barrios596/Te-La-Cambio",
            "logo": gitlogo
        }
    ]
}

export default data;