'use strict';

const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log({userNumber});
console.log({computerNumber});

if (userNumber === computerNumber){
    console.log('pareggio')
} else if (userNumber > computerNumber){
    console.log('utente vince')
} else {
    console.log('computer vince')
}