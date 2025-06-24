

let inputEle = document.getElementById("input")
let saveEle = document.getElementById("savebtn")
let clearEle = document.getElementById("clearbtn")

let savedEle = localStorage.getItem("userip")
if(savedEle !== null){
    inputEle.value=savedEle
}

saveEle.onclick=function(){
    localStorage.setItem("userip",inputEle.value)
    
}

clearEle.onclick=function(){
    localStorage.removeItem("userip")
    inputEle.value=""
}