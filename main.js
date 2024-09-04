main.js
function promedio () {
// declarar la variable
const nu1 = prompt("Ingresa el numero 1")
const nu2 = prompt("Ingresa el primer 2")
const nu3 = prompt("Ingresa el primer 3")

// convertir a enterp
const nu1Int = Number(nu1)
const nu2Int = Number(nu2)
const nu3Int = Number(nu3)

// sumar los numeros
const resultado = nu1Int + nu2Int + nu3Int

// calcular promedio
const promedio = resultado / 3

// mostrar el resultado
alert(* Promedio de los tres numeros es: * + promedio)
}

const operacion = prompt(" Para el promedio 1 para el sueldo 2")

console.log(operacion)
switch (operacion) {
    case "1":
        Promedio()
        
        break;
        case "2":
            tusueldo()
            break;

    default:
        alert("El numero no es correcto")
        break;
}
function tusueldo () {
    const precioHora = prompt("Ingresa el precio de tus horas ")
    const horasTrabajadas = prompt("Ingrese las horas trabajadas")
    
    const sueldo = precioHora   * horasTrabajadas
    alert("Tu sueldo este mes de: " + sueldo +"DOP")
}