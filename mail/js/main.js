'use strict';

const whiteList = ['prova1@gmail.com', 'prova2@gmail.com', 'prova3@gmail.com', 'prova1@hotmail.it', 'prova2@hotmail.it', 'prova3@hotmail.it'];
const userMail = prompt('inserire mail');

let confirmed = false

for (let i = 0; i < whiteList.length; i++){
    if(whiteList[i] === userMail){
        confirmed = true;
    };
};

if (confirmed === true){
    console.log('mail confermata')
} else {
    console.log('mail respinta')
}