'use strict'
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('pouco', 'medio', 'alto')

}

function calcularDesconto(){
    
    const preco = document.getElementById ('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')
    
    const precoReal = Number(preco.value)
    const descontoReal = Number(desconto.value)
    
    

    const percentualReal = (precoReal * descontoReal)/100
    const resultadoReal = precoReal - percentualReal
    const precoDesconto = precoReal - resultadoReal
    

    removerClasses()
    if(desconto.value <= 5){
        resultado.textContent = 'Economizou: R$' + precoDesconto.toFixed(2) + ' / Valor final: R$' + resultadoReal
        resultado.classList.add('pouco')


    }else if (desconto.value >5 && desconto.value <= 10){
        resultado.textContent = 'Economizou: R$' + precoDesconto.toFixed(2) + ' / Valor final: R$' + resultadoReal
        resultado.classList.add('medio')

    }else{
        resultado.textContent = 'Economizou: R$' + precoDesconto.toFixed(2) + ' / Valor final: R$' + resultadoReal
        resultado.classList.add('alto')
    }
}