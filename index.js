let slide = document.querySelectorAll('.slide')

let rightArrow = document.getElementById('right-arrow')
let leftArrow = document.getElementById('left-arrow')

let slideAtual = 0

rightArrow.addEventListener('click', avancarSlide)

function avancarSlide(){
    const slideAmostra = document.querySelector('.mostrar')

    slideAtual = slideAtual+1
    leftArrow.classList.remove('opacidade')

    if(slideAtual<3){
        slideAmostra.classList.remove('mostrar')
        slide[slideAtual].classList.add('mostrar')
    }else{
        slideAmostra.classList.remove('mostrar')
        slide[slideAtual].classList.add('mostrar')
        rightArrow.classList.add('opacidade')
    }
}

leftArrow.addEventListener('click', voltarSlide)

function voltarSlide(){
    const slideAmostra = document.querySelector('.mostrar')

    slideAtual = slideAtual-1
    rightArrow.classList.remove('opacidade')

    if(slideAtual>0){
        slideAmostra.classList.remove('mostrar')
        slide[slideAtual].classList.add('mostrar')
    }else{
        slideAmostra.classList.remove('mostrar')
        slide[slideAtual].classList.add('mostrar')
        leftArrow.classList.add('opacidade')
    }

 
}

