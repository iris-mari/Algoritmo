//4. //
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}

//5.//
let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");

if (escolha === "C" || escolha === "c") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
} else if (escolha === "F" || escolha === "f") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    alert("Temperatura em Celsius: " + celsius.toFixed(2));
} else {
    alert("Opção inválida.");
}


//6.//
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert("Pelo menos um dos números é múltiplo do outro.");
} else {
    alert("Nenhum dos números é múltiplo do outro.");
}
