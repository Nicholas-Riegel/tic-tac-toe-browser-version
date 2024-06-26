const clickTile = document.querySelectorAll(".cell")
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart-btn');
const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]
let turn = 0

const clickedSquares = []


// randonmly picks the first player!
function pickFirstPlayer(){
   turn = Math.floor(Math.random() * 2 )
   if( turn === 0) {
   document.querySelector('#status').innerText = `X's turn`
   } else {
      document.querySelector('#status').innerText = `O's turn`
   }
}


pickFirstPlayer()







// This checks the winner
const checkWinner = () => { 
    
   if (
       (topRow[0] === 'x' && topRow[1] === 'x' && topRow[2] === 'x')  // check for 3 in a row for first row
       ||
       (midRow[0] === 'x' && midRow[1] === 'x' && midRow[2] === 'x')  //  check for 3 in a row for 2nd row
       ||
       (bottomRow[0] === 'x' && bottomRow[1] === 'x' && bottomRow[2] === 'x')  // check for 3 in a row for 3rd row
       || 
       (topRow[0] === 'x' && midRow[0] === 'x' && bottomRow[0] === 'x')//check left column
       ||
       (topRow[1] === 'x' && midRow[1] === 'x' && bottomRow[1] === 'x')//check middle column
       ||
       (topRow[2] === 'x' && midRow[2] === 'x' && bottomRow[2] === 'x')//check right column
       ||
       (bottomRow[0] === 'x' && midRow[1] === 'x' && topRow[2] === 'x')// check diag left to right from the bottom
       ||
       (topRow[0] === 'x' && midRow[1] === 'x' && bottomRow[2] === 'x')//check diag left to right from the top
       ) { 
           document.querySelector('#status').innerText = `X is the winner.`
   } else if (
       (topRow[0] === 'o' && topRow[1] === 'o' && topRow[2] === 'o')  // check for 3 in a row for first row
       ||
       (midRow[0] === 'o' && midRow[1] === 'o' && midRow[2] === 'o')  //  check for 3 in a row for 2nd row
       ||
       (bottomRow[0] === 'o' && bottomRow[1] === 'o' && bottomRow[2] === 'o')  // check for 3 in a row for 3rd row
       || 
       (topRow[0] === 'o' && midRow[0] === 'o' && bottomRow[0] === 'o')//check left column
       ||
       (topRow[1] === 'o' && midRow[1]  === 'o' && bottomRow[1]   === 'o')//check middle column
       ||
       (topRow[2] === 'o' && midRow[2]  === 'o' && bottomRow[2]   === 'o')//check right column
       ||
       (bottomRow[0] === 'o' && midRow[1]  === 'o' && topRow[2]   === 'o')// check diag left to right from the bottom
       ||
       (topRow[0] === 'o' && midRow[1]  === 'o' && bottomRow[2]   === 'o')//check diag left to right from the top
       ) {
           document.querySelector('#status').innerText = `O is the winner.`
   } else if (clickedSquares.length === 9){

      document.querySelector('#status').innerText = `Cat's game!`

   }
}


clickTile.forEach(x =>{
   x.addEventListener('click', e =>{
      
      if(turn === 0){

         const choice = e.target.getAttribute('id')

         if (clickedSquares.includes(choice)) return;

         e.target.innerText = 'x'

         turn = 1
         
         clickedSquares.push(choice)

         if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'x';
         }
         if (choice >= 4 && choice <= 6){
               midRow[choice - 4] = 'x';
         }
         if (choice >= 7 && choice <= 9){
               bottomRow[choice - 7] = 'x';
         }
         if (clickedSquares.length < 9){
            document.querySelector('#status').innerText = `O's turn`
         } 

         checkWinner()
         
      } else{

         const choice = e.target.getAttribute('id')

         if (clickedSquares.includes(choice)) return;

         e.target.innerText = 'o'
         
         turn = 0
         
         clickedSquares.push(choice)

         if (choice >= 1 && choice <=3){
            topRow[choice - 1] = 'o';
         }
         if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = 'o';
         }
         if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = 'o';
         }
         if (clickedSquares.length < 9){
            document.querySelector('#status').innerText = `X's turn`
         } 

         checkWinner()
      }   
   })  
})




// restarts game

function restartGame() {
   // Clear the board
   clickTile.forEach(tile => { // this goes through each tile and resets it.
       tile.textContent = '';
   });
   
   // Reset game variables
   clickedSquares.length = 0;
   topRow.fill(1);
   midRow.fill(1); 
   bottomRow.fill(1);
   turn = 0;

   // Reset status message
   pickFirstPlayer()
}

// Event listener for restart button
restartBtn.addEventListener('click', restartGame);