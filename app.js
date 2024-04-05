const prompt = require('prompt-sync')();

/**------------------------------------CONSTANCTS---------------------------------------- */

let player1 = {
    name: '',
    symbol: ''
}
let player2 = {
    name: '',
    symbol: ''
}

let turn = 0;
const digits = ['1','2','3','4','5','6','7','8','9']

const topRow = [1, 2, 3]
const midRow = [4, 5, 6]
const bottomRow = [7, 8, 9]

const selectedNumbers = []

/**---------------------------------FUNCTIONS------------------------------------------- */

const userCall = () => {  // creating a function for asking the name of the players 
    
    console.clear()

    player1.name = prompt('What is your name Player 1? '); // create variable for player 1 from user prompt
    console.log(`Player 1's name is ${player1.name}`);

    player2.name = prompt('What is your name Player 2? ');  // create variable for player 2 prompt 
    console.log(`Player 2's name is ${player2.name}`);

}

// This selects a random beginner
const randomizer = () => { // this is the function to determine who goes first
    turn = Math.floor(Math.random() * 2) ;
}

// This checks the winner
const checkWinner = () => { 
    
    if (
        (topRow[0]=== player1.symbol && topRow[1]=== player1.symbol && topRow[2]=== player1.symbol)  // check for 3 in a row for first row
        ||
        (midRow[0]=== player1.symbol && midRow[1]=== player1.symbol && midRow[2]=== player1.symbol)  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== player1.symbol && bottomRow[1]=== player1.symbol && bottomRow[2]=== player1.symbol)  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== player1.symbol && midRow[0]=== player1.symbol && bottomRow[0]=== player1.symbol)//check left column
        ||
        (topRow[1]=== player1.symbol && midRow[1]=== player1.symbol && bottomRow[1]=== player1.symbol)//check middle column
        ||
        (topRow[2]=== player1.symbol && midRow[2]=== player1.symbol && bottomRow[2]=== player1.symbol)//check right column
        ||
        (bottomRow[0]=== player1.symbol && midRow[1]=== player1.symbol && topRow[2]=== player1.symbol)// check diag left to right from the bottom
        ||
        (topRow[0]=== player1.symbol && midRow[1]=== player1.symbol && bottomRow[2]=== player1.symbol)//check diag left to right from the top
        ) { 
            console.log(`${player1.name} (${player1.symbol}) is the winner. `); 
            process.exit()
    } else if (
        (topRow[0]=== player2.symbol && topRow[1]=== player2.symbol && topRow[2]=== player2.symbol)  // check for 3 in a row for first row
        ||
        (midRow[0]=== player2.symbol && midRow[1]=== player2.symbol && midRow[2]=== player2.symbol)  //  check for 3 in a row for 2nd row
        ||
        (bottomRow[0]=== player2.symbol && bottomRow[1]=== player2.symbol && bottomRow[2]=== player2.symbol)  // check for 3 in a row for 3rd row
        || 
        (topRow[0]=== player2.symbol && midRow[0]=== player2.symbol && bottomRow[0]=== player2.symbol)//check left column
        ||
        (topRow[1]=== player2.symbol && midRow[1]=== player2.symbol && bottomRow[1]=== player2.symbol)//check middle column
        ||
        (topRow[2]=== player2.symbol && midRow[2]=== player2.symbol && bottomRow[2]=== player2.symbol)//check right column
        ||
        (bottomRow[0]=== player2.symbol && midRow[1]=== player2.symbol && topRow[2]=== player2.symbol)// check diag left to right from the bottom
        ||
        (topRow[0]=== player2.symbol && midRow[1]=== player2.symbol && bottomRow[2]=== player2.symbol)//check diag left to right from the top
        ) {
            console.log(`${player2.name} (${player2.symbol}) is the winner. `); 
            process.exit()
    }
        
}    
         
const userSymCall = () => { // this is the function to let users pick their symbols 
    
    const xsOrOs = ['X', 'x', 'O', 'o']
    
    let choice;
    
    while (!xsOrOs.includes(choice)){
        
        if (choice === 'exit') {
            console.clear()
            process.exit()
        }
        
        choice = prompt(`What is your Symbol ${player1.name}? X or O? `);
    }
    
    player1.symbol = choice;
    
    if (player1.symbol === "X" || player1.symbol === "x" ) {  // checks to see if user inputed lower or uppercase X
        player1.symbol = "X"
        player2.symbol = "O"
        console.log(`${player1.name} is ${player1.symbol} and ${player2.name} is ${player2.symbol}` )
    } else if ( player1.symbol === "O" ||  player1.symbol === "o" ) {  // checks to see if user inputed lower or uppercase O
        player1.symbol = "O"
        player2.symbol = "X"
        console.log(`${player1.name} is ${player1.symbol} and ${player2.name} is ${player2.symbol}`  )
    } else {
        console.log("You did not put in a valid response");
    }
}
        
// This shows the gameboard
const showGameBoard = () => {
    console.log(...topRow); 
    console.log(...midRow);
    console.log(...bottomRow);
}

// This is the feature for picking the square
const pickSquare = () => {
    
    if (turn === 0){
        
        let choice;
        
        while (!digits.includes(choice) || selectedNumbers.includes(choice)){
            
            if (choice === 'exit') {
                console.clear()
                process.exit()
            }
            
            choice = prompt(`${player1.name} (${player1.symbol}) please pick an unused square by entering a number from 1 to 9: `)
        }
        
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = player1.symbol;
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = player1.symbol;
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = player1.symbol;
        }
        console.clear()
        turn = 1;
        selectedNumbers.push(choice)
        showGameBoard()
        checkWinner()
        
    } else if (turn === 1){
        
        let choice;
        
        while (!digits.includes(choice) || selectedNumbers.includes(choice)){
            
            if (choice === 'exit') {
                console.clear()
                process.exit()
            }
            choice = prompt(`${player2.name} (${player2.symbol}), please pick an unused square by entering a number from 1 to 9: `)
        }
        
        if (choice >= 1 && choice <=3){
            topRow[choice - 1] = player2.symbol;
        }
        if (choice >= 4 && choice <= 6){
            midRow[choice - 4] = player2.symbol;
        }
        if (choice >= 7 && choice <= 9){
            bottomRow[choice - 7] = player2.symbol;
        }
        console.clear()
        turn = 0;
        selectedNumbers.push(choice)
        showGameBoard()
        checkWinner()
    }    
}

const playGame = () => {   // this is the loop for the player to take turns 
    while(selectedNumbers.length < 9){
        pickSquare()
    }
    console.log("Looks like there wasn't a winner.");   
}
/**------------------------------------------------------FUNCTION CALLS-------------------------------------- */

userCall() 
userSymCall()

console.clear()
showGameBoard()
randomizer()

playGame()
