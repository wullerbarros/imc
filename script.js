const calcularIMC = () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
   
    if (peso && altura) {
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
   
    if (imc < 18.5) {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Magreza`;
    } else if (imc < 25) {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Normal`;
    } else if (imc < 30) {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
    } else if (imc < 35) {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Obesidade Grau I`;
    } else if (imc < 40) {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Obesidade Grau II`;
    } else {
    resultado.textContent = `IMC: ${imc.toFixed(2)} - Obesidade Grau III`;
    }
    } else {
    alert('Preencha todos os campos!');
    }
   };
   
   document.getElementById('calcular').addEventListener('click', calcularIMC);