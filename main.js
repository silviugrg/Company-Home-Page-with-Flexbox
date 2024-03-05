#!/usr/bin/node

const userChoice = () => {
    let choice = 'rock';
    //let choice = prompt('Alegerea ta este: ', 'rock');
    return choice;
  }
  
  
  const computerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let choice = ''; 
    if (number === 0) {
      choice = 'rock';
    } else if (number === 1) {
      choice = 'paper';
    } else if (number === 2) {
      choice = 'scissors';
    }
    return choice;
  }
  
  
  const gameLogic = () => {
    let user = userChoice();
    let computer = computerChoice();
  
    if (user === 'rock' && computer === 'scissors') {
      console.log('Utilizatorul a castigat!');
    } else {
      console.log('Calculatorul a castigat!');
    };
    if (user === 'scissors' && computer === 'paper') {
      console.log('Utilizatorul a castigat!')
    } else {
      console.log('Calculatorul a castigat!');
    };
    if (user === 'paper' && computer === 'rock') {
      console.log('Utilizatorul a castigat!');
    } else {
      console.log('Calculatorul a castigat');
    };
    if (
      user === 'rock' && computer === 'rock' ||
      user === 'paper' && computer === 'paper' ||
      user === 'scissors' && computer === 'scissors'
    ) {
      console.log('Remiza!');
    };
  
  }
  
  
  const start = () => {
    console.log(gameLogic());
  }