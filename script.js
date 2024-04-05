const clickTile = document.querySelectorAll(".cell")
 clickTile.addEventlistener('click', e =>{
    e.target.innerText = 'x'
 } )
