const val = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById('btn')
const color = document.getElementById('color')
const body = document.body;

btn.onclick = function (){
    let hexColor = "#"
    
    for( let i=0; i<6; i++){
        hexColor += val[random()];
    }

    body.style.backgroundColor = hexColor;
    color.innerText = hexColor;
}

function random(){
    return Math.floor(Math.random() * val.length)
}