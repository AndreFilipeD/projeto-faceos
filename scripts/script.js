var rotLogo = window.document.querySelector('#anilogo')

function logoup(){
    rotLogo.style = 'width:190px'
    rotLogo.style = 'filter: invert()'
}

function logodown(){
    rotLogo.style = 'width:180px'
}

const loop = setInterval(()=>{
    rotLogo.style.transform= 'rotate('+ (window.scrollY)/5 +'deg)'  
})

