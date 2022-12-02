let box0 = document.getElementById("0")
let box1 = document.getElementById("1")
let box2 = document.getElementById("2")
let box3 = document.getElementById("3")
let box4 = document.getElementById("4")
let box5 = document.getElementById("5")
let box6 = document.getElementById("6")
let box7 = document.getElementById("7")
let box8 = document.getElementById("8")

let game =["","","","","","","",""];
let simbo = ["X","O"];
let vez = 1;




box0.addEventListener("click", function(){
    
    if(game[0]===""){
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
})

box1.addEventListener("click", function(){
    if(game[1]===""){
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
})

box2.addEventListener("click", function(){
    if(game[2]===""){
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
})

box3.addEventListener("click", function(){
    if(game[3]==="")
    if (vez=== 1){
        game[3] = simbo[0]
        box3.innerHTML = game[3]
        vez = 0
    }else{
        game[3] = simbo[1]
        box3.innerHTML = game[3]

        vez = 1
    }
})

box4.addEventListener("click", function(){
    if(game[4]==="")
    if (vez=== 1){
        game[4] = simbo[0]
        box4.innerHTML = game[4]
        vez =0
    }else{
        game[4] = simbo[1]
        box4.innerHTML = game[4]
        vez = 1
    }
})

box5.addEventListener("click", function(){
    if(game[5]==="")
    if (vez=== 1){
        game[5] = simbo[0]
        box5.innerHTML = game[5]
        vez = 0
    }else{
        game[5] = simbo[1]
        box5.innerHTML = game[5]
        vez = 1
    }
})

box6.addEventListener("click", function(){
    if(game[6]==="")
    if (vez===1){
        game[6] = simbo[0]
        box6.innerHTML = game[6]
        vez = 0
    }else{
        game[6] = simbo[1]
        box6.innerHTML = game[6]
        vez = 1
    }
})

box7.addEventListener("click", function(){
    if(game[7]==="")
    if (vez===1){
        game[7] = simbo[0]
        box7.innerHTML = game[7]
        vez = 0
    }else{
        game[7] = simbo[1]
        box7.innerHTML = game[7]

        vez = 1
    }
})

box8.addEventListener("click", function(){
    if (game[8]!="X"&&game[8]!="O")
    if (vez=== 1){
        game[8] = simbo[0]
        box8.innerHTML = game[8]
        vez = 0
    }else{
        game[8] = simbo[1]
        box8.innerHTML = game[8]
        vez = 1
    }
})
