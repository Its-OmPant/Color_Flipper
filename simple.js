const colors = ["red","blue","green","yellow","aqua","grey","aquamarine","purple","pink","teal","orange","black","lightgreen"]

const btn = document.getElementById('btn')
const color = document.getElementById('color')
const body = document.body;

btn.onclick = function (){
    const rand = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[rand];
    color.innerText = colors[rand];

}