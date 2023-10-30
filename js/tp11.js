/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const numero = parseInt(prompt("Escriba un número para verificar si es divisible por 2, 3, 5 o 7"))
const divisores = '2357'
let divisibles = '' 
let textoDivision = ''

for(i = 0; i < divisores.length; i++){
    if(numero % divisores[i] === 0){
        divisibles = divisibles + divisores[i]
    }
}

for(let i = 0; i < divisibles.length; i++){
    if (divisibles.length < 2){
        textoDivision = `por ${divisibles[i]}`
    }
    if(divisibles.length > 1 && i !== divisibles.length -1){
        textoDivision = textoDivision + `por ${divisibles[i]}, `
    }
    if(divisibles.length > 1 && i === divisibles.length -1){
        textoDivision = textoDivision + `y por ${divisibles[i]}.`
    }
}

if (divisibles  !== ''){
    alert(`El número elegido es divisible ${textoDivision}`)
    console.log(divisibles.length)
} else (alert ("El número elegido no es divisible por ninguna de las opciones (2,3,5,7)"))

/*
    Evité usar arrays y cualquier otra cosa que no hayamos visto aún en el curso
*/
