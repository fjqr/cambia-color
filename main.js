let blue = document.querySelector('.blue')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let violet = document.querySelector('.violet')
let pink = document.querySelector('.pink')
let screen = document.querySelector('.screen')

cambiaColor = () =>{
    blue.addEventListener('click',() =>{screen.classList.toggle('blue')
screen.style.transition= 'ease-in-out, 1s';
})
    red.addEventListener('click',() =>{screen.classList.toggle('red')
    screen.style.transition= 'ease-in-out, 1s'
})
    green.addEventListener('click',() =>{screen.classList.toggle('green')
    screen.style.transition= 'ease-in-out, 1s'
})
    violet.addEventListener('click',() =>{screen.classList.toggle('violet')
    screen.style.transition= 'ease-in-out, 1s'
})
    pink.addEventListener('click',() =>{screen.classList.toggle('pink')
    screen.style.transition= 'ease-in-out, 1s'
})
}


cambiaColor()