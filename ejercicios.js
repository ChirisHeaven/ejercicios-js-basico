// 1. Nombre y apellido
let miNombre = "Christian";
let miApellido = "Lorca";
console.log(miNombre + " " + miApellido);

// 2. Operación matemática
let unNumero = 10;
let resultado = (unNumero + 5) * 3;
console.log("El resultado matemático es:", resultado);

// 3. Comida favorita
let comidaFavorita = "Sushi"; // Pon tu comida favorita
console.log("Mi comida favorita es:", comidaFavorita);

// 4. Operaciones básicas con a = 10 y b = 3
let a = 10;
let b = 3;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("Módulo (resto):", a % b);

// 4.1. Cambiando valores por strings y combinados
let aString = "10";
let bString = "3";
// ¿Qué sucede? Con el símbolo '+' los textos se UNEN (concatenan) en vez de sumarse = "103"
console.log("Suma de strings:", aString + bString); 
// Con '-', '*' o '%', JavaScript intenta convertirlos a números automáticamente y la operación matemática sí funciona.
console.log("Resta de strings:", aString - bString); 

let aCombinado = "10";
let bNumero = 3;
// Igual que arriba: el '+' los une ("103"), pero la resta los trata como números (7).
console.log("Suma string + number:", aCombinado + bNumero);
console.log("Resta string + number:", aCombinado - bNumero);

// 5. Variable edad = 15
let edad = 15;
console.log("¿Es mayor a 10?:", edad > 10);
console.log("¿Es menor a 18?:", edad < 18);

// 6. Variable numero = 8
let numero = 8;
// Usamos && que significa "Y" (AND)
console.log("¿Es mayor que 5 Y menor que 10?:", numero > 5 && numero < 10);

// 7. Variable nota = 6
let nota = 6;
// Usamos === para preguntar si es "estrictamente igual"
console.log("¿Es igual a 7?:", nota === 7);

// 8. Variable temperatura = 25
let temperatura = 25;
console.log("¿Es mayor o igual a 30?:", temperatura >= 30);

// 9. Dos números
let num1 = 40;
let num2 = 20;
console.log("¿Son iguales?:", num1 === num2);
console.log("¿Es el primero mayor que el segundo?:", num1 > num2);

// 10. Conducir
let edadConductor = 17;
let tienePermiso = true;
// Usamos || que significa "O" (OR)
console.log("¿Puede conducir?:", edadConductor >= 18 || tienePermiso);

// 11. Login de usuario
let usuario = "admin";
let password = "1234";
console.log("¿Login correcto?:", usuario === "admin" && password === "1234");

