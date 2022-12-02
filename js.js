let box0 = document.getElementById("0")
let box1 = document.getElementById("1")
let box2 = document.getElementById("2")
let box3 = document.getElementById("3")
let box4 = document.getElementById("4")
let box5 = document.getElementById("5")
let box6 = document.getElementById("6")
let box7 = document.getElementById("7")
let box8 = document.getElementById("8")
let w = document.getElementById("w")
let b = document.getElementsByClassName("box")

let game =["","","","","","","","",""];
let simbo = ["X","O"];
let vez = 1;

function win(){
    if (game[0] ==="X"&&game[1]==="X"&&game[2]==="X" || game[0] ==="O"&&game[1]==="O"&&game[2]==="O" ){
        
        w.innerHTML = "Win!!!!"
        return true
        
        
        
    }else if(game[3] ==="X"&&game[4]==="X"&&game[5]==="X" || game[3] ==="O"&&game[4]==="O"&&game[5]==="O"){
        
        w.innerHTML = "Win!!!!"
        return true
        
    }else if(game[6] ==="X"&&game[7]==="X"&&game[8]==="X" || game[6] ==="O"&&game[7]==="O"&&game[8]==="O"){
        
        w.innerHTML = "Win!!!!"
        return true
    }else if(game[0] ==="X"&&game[3]==="X"&&game[6]==="X" || game[0] ==="O"&&game[3]==="O"&&game[6]==="O"){
        w.innerHTML = "Win!!!!"
        return true
    }else if(game[1] ==="X"&&game[4]==="X"&&game[7]==="X" || game[1] ==="O"&&game[4]==="O"&&game[7]==="O"){
        w.innerHTML = "Win!!!!"
        return true
    }else if(game[2] ==="X"&&game[5]==="X"&&game[8]==="X" || game[2] ==="O"&&game[5]==="O"&&game[8]==="O"){
        w.innerHTML = "Win!!!!"
        return true
    }else if(game[0] ==="X"&&game[4]==="X"&&game[8]==="X" || game[0] ==="O"&&game[4]==="O"&&game[8]==="O"){
        w.innerHTML = "Win!!!!"
        return true
    }else if(game[2] ==="X"&&game[4]==="X"&&game[6]==="X" || game[2] ==="O"&&game[4]==="O"&&game[6]==="O"){
        w.innerHTML = "Win!!!!"
        return true
    }else{
        return false
    }
}


box0.addEventListener("click", function(){
    
    if(game[0]==="" && win()===false){
    if (vez=== 1){
        game[0] = simbo[0]
        box0.innerHTML = game[0]
        vez = 0
        
    }else{
        game[0] = simbo[1]
        box0.innerHTML = game[0]
        vez = 1
    }
    }
    win()
})

box1.addEventListener("click", function(){
    if(game[1]==="" && win()===false){
    if (vez=== 1){
        game[1] = simbo[0]
        box1.innerHTML = game[1]
        vez = 0
    }else{
        game[1] = simbo[1]
        box1.innerHTML = game[1]
        vez =1
    }
}
win()
})

box2.addEventListener("click", function(){
    if(game[2]==="" && win()===false){
    if (vez=== 1){
        game[2] = simbo[0]
        box2.innerHTML = game[2]
        vez = 0
    }else{
        game[2] = simbo[1]
        box2.innerHTML = game[2]
        vez = 1
    }
    }
    win()
})

box3.addEventListener("click", function(){
    if(game[3]==="" && win()===false)
    if (vez=== 1){
        game[3] = simbo[0]
        box3.innerHTML = game[3]
        vez = 0
    }else{
        game[3] = simbo[1]
        box3.innerHTML = game[3]

        vez = 1
    }
    win()
})

box4.addEventListener("click", function(){
    if(game[4]==="" && win()===false)
    if (vez=== 1){
        game[4] = simbo[0]
        box4.innerHTML = game[4]
        vez =0
    }else{
        game[4] = simbo[1]
        box4.innerHTML = game[4]
        vez = 1
    }
    win()
})

box5.addEventListener("click", function(){
    if(game[5]==="" && win()===false)
    if (vez=== 1){
        game[5] = simbo[0]
        box5.innerHTML = game[5]
        vez = 0
    }else{
        game[5] = simbo[1]
        box5.innerHTML = game[5]
        vez = 1
    }
    win()
})

box6.addEventListener("click", function(){
    if(game[6]==="" && win()===false)
    if (vez===1){
        game[6] = simbo[0]
        box6.innerHTML = game[6]
        vez = 0
    }else{
        game[6] = simbo[1]
        box6.innerHTML = game[6]
        vez = 1
    }
    win()
})

box7.addEventListener("click", function(){
    if(game[7]==="" && win()===false)
    if (vez===1){
        game[7] = simbo[0]
        box7.innerHTML = game[7]
        vez = 0
    }else{
        game[7] = simbo[1]
        box7.innerHTML = game[7]

        vez = 1
    }
    win()
})

box8.addEventListener("click", function(){
    if (game[8]!="X"&&game[8]!="O" && win()===false)
    if (vez=== 1){
        game[8] = simbo[0]
        box8.innerHTML = game[8]
        vez = 0
    }else{
        game[8] = simbo[1]
        box8.innerHTML = game[8]
        vez = 1
    }
    win()
})

