/* 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/

const frase = prompt("Escribí tu frase y se extraerán las vocales que aparecen en orden")
let vocales = ''

for (i=0; i < frase.length; i++){
    if(frase[i] === 'a'| frase[i] === 'e' | frase[i] === 'i' | frase[i] === 'o' | frase[i] === 'u'){
        vocales =  vocales + frase[i]
    }
}

alert(`Las vocales de la frase en orden son: ${vocales}`)