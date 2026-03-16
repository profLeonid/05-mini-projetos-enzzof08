'use strict'
function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ap','rec','rep')

}
function calcularMedia(){
    const nota1 = document.getElementById ('nota1')
    const nota2 = document.getElementById ('nota2')
    const nota3 = document.getElementById ('nota3')
    const resultado = document.getElementById('resultado')


    const n1 = Number(nota1.value)
    const n2 = Number(nota2.value)
    const n3 = Number(nota3.value)

    const media = (n1 + n2 + n3)/3
    

    removerClasses()
    if(media>= 7){
        resultado.textContent = 'Aprovado'
        resultado.classList.add('ap')
    }else if(media < 7 && media > 5){
        resultado.textContent = 'Recuperação' 
        resultado.classList.add('rec')
    }else{
        resultado.textContent = 'Reprovado' 
        resultado.classList.add('rep')
    }


}