/* ==================================== Operaciones básicas, Tipos de datos, Prompt y Alert =====================*/

/*
    1.-Escribir un programa que muestre un prompt donde el usuario ingresa un número, 
    luego muestra otro prompt pidiendo otro número, finalmente el programa muestra 
    una alerta con el resultado de la suma.
*/

const suma = () => {
    let numero1 = parseInt(prompt("Ingrese un numero")),
        numero2 = parseInt(prompt("Ingrese otro numero")),
        suma = numero1 + numero2;

    return suma;
}

// alert(suma())

/*
    Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y 
    el programa muestre en una alerta la temperatura en Fahrenheit.

*/

const celsiusToFarenheit = (celsius) => {
    return 9 / 5 * celsius + 32
}

// let celsius = parseInt(prompt("Ingresa la temperatura en grados celsius"));
// alert(celsiusToFarenheit(celsius));

/*
    Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5
*/

const divideEntreDiez = (numero) => {
    return numero / 10;
}

// alert(divideEntreDiez(parseInt("Ingresa un numero que será divido entre 10")));


/* 
    Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.
*/

let a = [1, 2, 3];
// alert(typeof a);


/* ==================================== IF, IF ELSE =====================*/

/*
    Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.
*/

const parImpar = (number) => {

    // Si el numero que se ingresa es diferente de un numero no se hara la comprobacion de si es par o impar
    if (isNaN(number)) {
        return "El numero ingresado no es un numero";
    }

    if (number % 2 == 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
}

let number = document.querySelector("#input1");
let button = document.querySelector("#buttonSubmit1");

button.addEventListener("click", () => {
    alert(parImpar(number.value))
})

/*
    Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, 
        mostrar el resultado con console.log
*/

const divisiblePorCinco = (number) => {
    if(isNaN(number)) {
        return "El numero ingresado no es un numero"
    }

    if (number % 5 == 0) {
        return `${number} es divisible por 5`;
    } else {
        return `${number} no es divisible por 5`;
    }
}

let number2 = document.querySelector("#input2");
let button2 = document.querySelector("#buttonSubmit2");

button2.addEventListener("click", () => {
    alert(divisiblePorCinco(number2.value))
})

/*

    Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, 
    mostrar el resultado con console.log

*/

const divisiblePorCincoYOnce = (number) => {
    if(isNaN(number)) {
        return "El numero ingresado no es un numero"
    }

    if (number % 5 == 0 && number % 11 == 0) {
        return `${number} es divisible por 5 y 11`;
    } else {
        return `${number} no es divisible por 5 y 11`;
    }
}

let number3 = document.querySelector("#input3");
let button3 = document.querySelector("#buttonSubmit3");

button3.addEventListener("click", () => {
    alert(divisiblePorCinco(number3.value))
})
/*

    Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y 
    luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio 
    ocupando un if ternario.

*/


const mayorOMenor = () => {

    let number = parseInt(prompt("Ingresa un numero"));
    let number2 = parseInt(prompt("Ingresa un numero"));

    if(isNaN(number) || isNaN(number2)) {
        return "Los numeros ingresados no son numeros";
    }

    return (number > number2) ? `${number} es mayor` : `${number2} es mayor`;
}

document.querySelector("#buttonSubmit4").addEventListener("click", () => {
    alert(mayorOMenor())
})


const whatStart = (string) => {
    if(isNaN(string.charAt())) {
        return "La cadena de caracteres empieza con una letra";
    } else {
        return "La cadena de caracteres empieza con un numero"
    }
}

let input5 = document.querySelector("#input5");
let button5 = document.querySelector("#buttonSubmit5");

button5.addEventListener("click", () => {
    alert(whatStart(input5.value));
})