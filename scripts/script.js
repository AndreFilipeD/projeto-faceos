var rotLogo = window.document.querySelector('#anilogo')

function logoup(){
    
    rotLogo.style = 'filter: invert()'
}

function logodown(){
    rotLogo.style = 'filter: none'
}

const loop = setInterval(()=>{
    rotLogo.style.transform= 'rotate('+ (window.scrollY)/5 +'deg)'  
})

