var rotLogo = this.window.document.querySelector('#anilogo')
var titleName = this.window.document.querySelector('#facename')

function touchup(){
    rotLogo.style = 'filter: invert()'
}

function touchdown(){
    rotLogo.style = 'filter: none'
}

function touchupb(){
    titleName.style = 'filter: invert()'
}

function touchdownb(){
    titleName.style = 'filter: none'
}

function gohome(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const loop = setInterval(()=>{
    rotLogo.style.transform= 'rotate('+ (window.scrollY)/3 +'deg)'  
})

