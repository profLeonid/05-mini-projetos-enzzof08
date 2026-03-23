'use strict'


function atualizarSelect(){
    const select1 = document.getElementById('select1').value
    const select2 = document.getElementById("select2");
    const select3 = document.getElementById('select3')

    select2.innerHTML = '<option value=""></option>';
    select3.innerHTML = '<option value=""></option>';
    

    if (select1 === "vertebrado") {
        select2.innerHTML = '<option value=""></option>';
        select2.innerHTML += '<option value="mamifero">Mamífero</option>';
        select2.innerHTML += '<option value="ave">Ave</option>';
    } else if (select1 === "invertebrado") {
        select2.innerHTML = '<option value=""></option>';
        select2.innerHTML += '<option value="inseto">Inseto</option>';
        select2.innerHTML += '<option value="anelideo">Anelídeo</option>';
    }

    

}

function atualizarSelect2(){
    const select2 = document.getElementById('select2').value
    const select3 = document.getElementById('select3')

    select3.innerHTML = '<option value=""></option>';


    if(select2 === 'mamifero'){
        select3.innerHTML = '<option value=""></option>';
        select3.innerHTML += '<option value="onivoro">Onívoro</option>'
        select3.innerHTML += '<option value="herbivoro">Herbívoro</option>';
    }else if(select2 === 'ave'){
        select3.innerHTML = '<option value=""></option>';
        select3.innerHTML += '<option value="carnivoro">Carnívoro</option>'
        select3.innerHTML += '<option value="onivoro">Onivoro</option>';
    }else if(select2 === 'inseto'){
        select3.innerHTML = '<option value=""></option>';
        select3.innerHTML += '<option value="hematofago">Hematofago</option>'
        select3.innerHTML += '<option value="herbivoro">Herbívoro</option>';
    }else if(select2 === 'anelideo'){
        select3.innerHTML = '<option value=""></option>';
        select3.innerHTML += '<option value="hematofago">Hematofago</option>'
        select3.innerHTML += '<option value="onivoro">Onivoro</option>';
    }
}

function definirEscolha(){
    const select2 = document.getElementById('select2').value
    const select3 = document.getElementById('select3').value
    const resultado = document.getElementById('resultado')

    if(select2 === 'mamifero'){
        if(select3 === 'onivoro'){
            resultado.textContent = 'Homem'
        }else{
            resultado.textContent = 'Vaca'
        }
    }else if(select2 === 'ave'){
        if(select3 === 'carnivoro'){
            resultado.textContent = 'Aguia'
        }else{
            resultado.textContent = 'Pomba'
        }
    }else if(select2 === 'inseto'){
        if(select3 === 'hematofago'){
            resultado.textContent = 'Pulga'
        }else{
            resultado.textContent = 'Lagarta'
        }
    }else if (select2 === 'anelideo'){
        if(select3 === 'hematofago'){
            resultado.textContent = 'Sanguessuga'
        }else{
            resultado.textContent = 'Minhoca'
        }
    }
}
