
// Snack 1.1 




// const num1 = parseInt(prompt('Numero 1:'));
// const num2 = parseInt(prompt('Numero 2:'));

// if (num1 > num2) {
//     alert(num1);
// } else if (num1 < num2) {
//     alert(num2);
// } else {
//     alert('sono uguali');
// }





// // Snack 1.2

// // L'utente inserisce due parole in successione, con due prompt.
// // Il software stampa prima la parola più corta, poi la parola più lunga.



// const input1 = document.querySelector('#parole-1');
// const input2 = document.querySelector('#parole-2')
// const btnGo = document.querySelector('#btn')
// const output = document.querySelector('.target1')

// btnGo.addEventListener('click', function() {

// const parole1 = input1.value;
// const parole2 = input2.value;
// const contatore1 = parole1.length;
// const contatore2 = parole2.length;

// const output1 = `<p>parole 1 (ha ${contatore1} caratteri) sono: ${parole1}, parole 2 (ha ${contatore2} caratteri) sono: ${parole2}</p>`;
// const output2 = `<p>parole 2 (ha ${contatore2} caratteri) sono: ${parole2}, parole 1 (ha ${contatore1} caratteri) sono: ${parole1}</p>`;
// const output3 = `<p>sono uguali</p> `
// if (parole1.length < parole2.length) {
//    output.innerHTML = output1;
// } else if (parole1.length > parole2.length) {
//     output.innerHTML = output2;
// } else {
//     output.innerHTML = output3;
// }

// })





// // Snack 1.3

// // Il software deve chiedere per 10 volte all’utente di inserire un numero.
// // Il programma stampa la somma di tutti i numeri inseriti.

// let netTotal = 0;
// let total = 0; 
// let output = document.querySelector('#target2');


// for (let index = 1; index < 4; index++) {
//     let clientNumber = parseInt(prompt(`inserisci numero ${index} `));
    
//     total = total + clientNumber;

//     if (total != netTotal) {
//         netTotal = total;
//     } 
  
    
// }


// output.innerHTML = `Numero totale è: ${netTotal}`;
// console.log(netTotal);



// //Snack 1.4



// const emailList = ['Johny English', 'Boomer', 'Terminator', 'Marco Polo', 'Gatsby', 'Mad Maggie'];

// console.log(emailList);

// //DOM elements 

// let inputName = document.querySelector('#userTest');
// let btnSend = document.querySelector('#send')

// // Login function

// btnSend.addEventListener('click', function() {

// //Logics start

// let userName = inputName.value;
// console.log(userName);

// // Cycle for searching email from list

// let found = false;

// for (let i = 0; i < emailList.length; i++) {
//     if (emailList[i].toLowerCase() == userName.toLowerCase()) {
//         found = true;
//     }
// }

// console.log('found', found)

// // output answer 
// const output = document.querySelector('.target4');


// if (found == false) {
//     console.log('non esiste');
//     output.innerHTML = 'non esiste'
    
// }  else {
//     console.log('esiste');
//     output.innerHTML = `Ciao ${userName}, benvenuti alla festa!`
// }

// })



// //Snack 1.5

// const stampa = document.querySelector(".target5");
// let arrVuotoDispari = [];
// let arrVuotoPari = [];

// for (let index = 1; index < 7; index++) {
//     let arrNumber = parseInt(prompt(`inserisci numero ${index} `));

//     if (arrNumber % 2 == 1) {
//         arrVuotoDispari.push(arrNumber);
//     } else {
//         arrVuotoPari.push(arrNumber);
//     }
// }

// stampa.innerHTML = ` Array dispari:${arrVuotoDispari} <br><br> Array Pari:${arrVuotoPari}`;

// // Snack 1.6

//  let inputNumber = document.querySelector('#user-number');
//  const btnSend2 = document.querySelector('#send2')
//  let output = document.querySelector('.target6')

// btnSend2.addEventListener('click', function() {

//     let userNumber = inputNumber.value;
//     let totalNumber = [];
//     if (userNumber.length != 4) {
//         output.innerHTML = "It must be 4 digit number";
//     }
//     else if (userNumber != parseInt(userNumber)) {
//         output.innerHTML = "You must enter number";
//     } else {
//         for (let index = 0; index < userNumber.length; index++) {
//                 totalNumber.push(userNumber[index]);
//                 console.log(totalNumber);
       
        
//     }
//         let sumTotal = 0;
//         for (let i = 0; i < totalNumber.length; i++) {
//         sumTotal += parseInt(totalNumber[i]);
//         }
//         output.innerHTML = sumTotal;
//     }
   
    
// })


/* //Snack 2.0
const arr = [];

let sum = 0;
let media = 0;

for (let index = 1; index <= 10; index++) {
    arr.push(index);
}

let index = 0;
while (index < arr.length) {
    sum += arr[index];
    index++;
}

media = sum / arr.length;

console.log(`totale: ${sum}`);
console.log(`media: ${media}`);

*/

// // Snack 2.1 

// const arr = [];

// let sumFor = 0;
// let sumWhile = 0;
// let index = 0;
// while ( index < 5) {

//     arr.push(parseInt(prompt('Inserisci numero')));
//     index++
// }

// let index2 = 0;
// while (index2 < arr.length) {
//     sumWhile += arr[index2];
//     index2++;
    
// }

// for (let index = 0; index < arr.length; index++ ) {
//     sumFor += arr[index];
// }

// console.log(`totale usando For: ${sumFor}`);
// console.log(`totale usando While: ${sumWhile}`);


// // Snack 2.2 

// let numero = parseInt(prompt('inserisci un numero'));

// if (numero % 2 == 0) {
//     console.log(numero);
// } else {
//     numero += 1;
//     console.log(numero);
// }

//Snack 2.3 

const arrName = ['Bruce', 'Tom' , 'Metal'];
const arrSurname = ['Hardy', 'Rock' , 'Lee'];
const arrNameSurname = [];

let listCount = 1;
let RandomNameSurname;
while (listCount <= 3) {
    let counterName = randomNum(0, 3);
    let counterSurname = randomNum(0, 3);
    console.log(counterName);
    console.log(counterSurname);
    RandomNameSurname = arrName[counterName] + " " + arrSurname[counterSurname];
    arrNameSurname.push(RandomNameSurname);
    listCount++;
}

console.log(`Random Generated List: ${arrNameSurname}`);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }