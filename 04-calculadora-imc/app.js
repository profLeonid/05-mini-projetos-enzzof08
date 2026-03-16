'use strict'
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ab','pn','sp','obI','obII','obIII')
}
function calcularIMC(){
    const nome = document.getElementById ('nome')
    const altura = document.getElementById ('altura')
    const peso = document.getElementById ('peso')
    const resultado = document.getElementById ('resultado')

    const alturaReal = Number(altura.value)
    const pesoReal = Number(peso.value)

    const imc = pesoReal / (alturaReal * alturaReal)

    removerClasses()

    if(imc < 18.5){
        resultado.textContent = 'Abaixo do Peso'
        resultado.classList.add('ab')
    }else if(imc >= 18.5 && imc < 25 ){
        resultado.textContent = 'Peso normal'
        resultado.classList.add('pn')
    }else if (imc >= 25 && imc < 30){
        resultado.textContent = 'Sobrepeso'
        resultado.classList.add('sp')
    }else if(imc >= 30 && imc < 35){
        resultado.textContent = 'Obesidade grau I'
        resultado.classList.add('obI')
    }else if(imc >= 35 && imc < 40){
        resultado.textContent = 'Obesidade grau II'
        resultado.classList.add('obII')
    }else{
        resultado.textContent = 'Obesidade grau III'
        resultado.classList.add('obIII')
    }

}