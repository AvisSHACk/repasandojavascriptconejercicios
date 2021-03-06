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

/**
 * Crear un programa que determine si un string introducido por un usuario
 * empieza con un número o con una letra.
 */

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



/**
 * Crear un programa donde se introduzca los 3 angulos internos de un
 * triangulo y se determine si el triangulo es valido o no
*/
const  trianguloValido = () => {

  let angulo1 = parseInt(prompt("Ingresa un valor de angulo")),
    angulo2 = parseInt(prompt("Ingresa un valor de angulo")),
    angulo3 = parseInt(prompt("Ingresa un valor de angulo"));

  if (angulo1 + angulo2 + angulo3 === 180) {
    return 'El triangulo es valido';
  } else {
    return "El triangulo ingresado es invalido";
  }

}


document.querySelector("#buttonSubmit6").addEventListener('click', () => {
  alert(trianguloValido());
})


/**
 * Determinar si una palabra empieza con mayusculas o no
 */
const startUpper = (string) => {
  if(string.charAt() == string.charAt().toUpperCase()) {
    return `${string} empieza con una letra mayuscula`;
  } else {
    return `${string} no empieza con una letra mayuscula`;
  }
}

let input7 = document.querySelector("#input7"),
  buttonSubmit7 = document.querySelector("#buttonSubmit7");

buttonSubmit7.addEventListener("click", () => {
  alert(startUpper(input7.value));
})


/**
 * Determinar si un año dado es bisiesto o no
 */

const esBisiesto = () => {
    let year = prompt('Ingresa cualquier año');

    if(year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        return `${year} es bisiesto`;
    } else {
        return `${year} no es bisiesto`;
    }
}




document.querySelector("#buttonSubmit8").addEventListener('click', () => {
    alert(esBisiesto());
})


/**
 * Escribir un programa JavaScript en el que el programa escoge al azar un
 * entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que
 * introduzca un número en un popup para intentar adivinarlo. Si la entrada
 * del usuario coincide con el número de conjetura, el programa mostrará un
 * mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No
 * corresponde"
 */

const adivinaNumero = () => {
    let userNumber = prompt("La maquina ya dio su numero del 1 a 10, intenta adivinarlo")
    let numeroMaquina = Math.round(Math.random() * 10);
    console.log(numeroMaquina);
    if(userNumber === numeroMaquina) {
        return "Buen trabajo"
    } else {
        return "No corresponde";
    }

}

document.querySelector("#buttonSubmit9").addEventListener('click', () => {
    alert(adivinaNumero());
})


/**
 * Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa
 * el usuario en un prompt.
 */
const incrementaN = () => {
    let n = prompt("Ingresa un numero");

    let contador = 0;
    let msg = ' ';
    while (contador < n) {
        msg += contador + 1 + ' ';
        contador++;
    }
    
    return msg;
}

document.querySelector('#buttonSubmit10').addEventListener('click', () => {
    alert(incrementaN());
})

/**
 * Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
 */
 const incrementaNdos = () => {
    let n = prompt("Ingresa un numero");

    let contador = 0;
    let msg = ' ';
    while (contador < n) {
        msg += contador + 1 + ' ';
        contador+=2;
    }
    
    return msg;
}

document.querySelector('#buttonSubmit11').addEventListener('click', () => {
    alert(incrementaNdos());
})


/**
 * Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
 */
 const disminuyeN = () => {
    let n = prompt("Ingresa un numero");

    let msg = ' ';
    while (n >= 1) {
        msg += n + ' ';
        n-=1;
    }
    
    return msg;
}

document.querySelector('#buttonSubmit12').addEventListener('click', () => {
    alert(disminuyeN());
})

/**
 * Escribir utilizando console.log la tabla del 9 hasta 9x10.
 */


const tablaNueve = () => {
    let contador = 0;
    let msg = '';
    while (contador <= 10){
        msg += `9 x ${contador} = ${9 * contador}\n`;
        contador+=1;
    }

    return msg;


}

document.querySelector("#buttonSubmit13").addEventListener("click", () => {
    alert(tablaNueve());
})

/**
 * Pedir al usuario que ingrese un número en un prompt, hacer la suma de 
 * todos los dígitos, validar que el número ingresado no contenga letras.
 */

const sumaDigitos = () => {
    let numero = prompt("Ingresa un numero");

    if(isNaN(numero)) {
        return "El numero ingresado no es un valor numerico";
    }


    numero = numero.split('');
    let suma = 0;
    let contador = 0;
    while(contador <= numero.length - 1) {
        suma += parseInt(numero[contador]);
        contador++;
    }

    return suma;
}

document.querySelector("#buttonSubmit14").addEventListener("click", () => {
    alert(sumaDigitos());
})

/**
 * Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
 */

const sumarNM = () => {
    let N = parseInt(prompt("Ingresa un numero")),
    M = parseInt(prompt("Ingresa un numero mayor al anterior")),
    suma = 0;
    while(N <= M) {
        if(N % 2 === 0) {
            suma += N;
        }

        N++;
    }

    return suma;
    
}


document.querySelector("#buttonSubmit15").addEventListener('click', () => {
    alert(sumarNM());
})

/**
 * Realizar el factorial de los primeros N números.
 */

const factorial = () => {
    let N = parseInt(prompt("Ingresa un numero"));

    let factorial = 1;
    while (N >= 1) {
        factorial *= N;
        N--;

    }

    return factorial;
}


document.querySelector("#buttonSubmit16").addEventListener('click', () => {
    alert(factorial());
})

/**
 * Encontrar todos los divisores de un número.
 */

 const divisoresN = () => {
    let N = parseInt(prompt("Ingresa un numero"));

    let divisores = '',
    contador = 0;
    while (contador <= N) {
        if(N % contador == 0) {
            divisores += contador + ' ';
        }
        contador++;

    }

    return divisores;
}


document.querySelector("#buttonSubmit17").addEventListener('click', () => {
    alert(divisoresN());
})

/**
 * 
 * Determinar si un número ingresado por el usuario en un loop es primo o no, validar 
 * que el número ingresado sea mayor o igual a dos.
*/

const esPrimo = () => {
    let numero = parseInt(prompt("Ingresa un numero"));


    let raiz = Math.round(Math.pow(numero, 0.5));
    let contador = 2;
    let primo = true;
    while(contador <= raiz) {
        if(numero % contador == 0) {
            primo = false;
            break;
        }

        contador++;
    }

    if(primo) {
        return "El numero ingresado es primo";
    } else {
        return "El numero ingresado no es primo";
    }
}

document.querySelector("#buttonSubmit18").addEventListener("click", () => {
    alert(esPrimo());
})

/**
 * 
 * Crear un programa que determine si un número es perfecto o no, (se dice 
 * que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)
*/

const nPerfectos = () => {
    let numero = parseInt(prompt("Ingresa un numero"));
    let result = 0;

    for(let i = 0; i < numero; i++) {
        if(numero % i == 0) {
            result += i;
        }
    }

    // while(contador < numero) {
    //     if(numero % contador == 0) {
    //         result += contador;
    //     }

    //     contador++;
    // }

    if(result === numero) {
        return `${numero} es un numero perfecto ya que la suma de sus divisores da ${result}`;
    } else {
        return `${numero} no es un numero perfecto ya que la suma de sus divisores da ${result}`;
    }
}

document.querySelector("#buttonSubmit19").addEventListener("click", () => {
    alert(nPerfectos());
})

/**
 * Generar los primeros N números primos, donde n es ingresado por el usuario.
 * 
 */

const primerosPrimos = () => {
    let N = parseInt(prompt("Ingresa un numero"));
    let contador = 2;
    let msg = "";

    while(contador <= N){
        let contador2 = 2;
        let primo = true;
        while(contador2 < contador) {
            if(contador % contador2 == 0) {
                primo = false;
                break;
            }

            contador2++;
        }

        if(primo) {
            msg += contador + ' ';
        }

        contador++;
    }

    return msg;
}

document.querySelector("#buttonSubmit20").addEventListener("click", () => {
    alert(primerosPrimos());
})

/**
 * Generar los primeros N números perfectos.
 * 
 */

const primerosPerfectos = () => {
    let N = parseInt(prompt("Ingresa un numero"));
    let msg = "";
    let contador = 1;

    while(contador <= N) {
        let contador2 = 1;
        let sumaPerfecto = 0;
        while(contador2 < contador) {
            if(contador % contador2 === 0) {
                sumaPerfecto += contador2;
            }

            contador2++;
        }

        if(contador == sumaPerfecto) {
            msg += contador + " ";
        }
        contador++;
    }

    return msg;
}

document.querySelector("#buttonSubmit21").addEventListener("click", () => {
    alert(primerosPerfectos());
})