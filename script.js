const clickTile = document.querySelectorAll(".cell")
let turn = 0
 clickTile.forEach(x =>{
    x.addEventListener('click', e =>{
        if(turn === 0){
            e.target.innerText = 'x'
            turn = 1
        } else{
            e.target.innerText = 'o'
            turn = 0
        }
        
     } )  
 }) 
 
 

