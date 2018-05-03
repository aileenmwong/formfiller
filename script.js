//A script to fill out the Broadway Lottery daily
//https://www.luckyseat.com/hamilton-ny/
//https://www.luckyseat.com/frozen/

window.onload = function() {
  console.log('Script Running');

//populate checkboxes
let performance1 = document.querySelector('#performance1');
performance1.checked = true;

let performance2 = document.querySelector('#performance2');
performance2.checked = true;

let performance3 = document.querySelector('#performance3');
if (performance3) { 
    performance3.checked = true;
}

let performance4 = document.querySelector('#performance4');
if (performance4) { 
    performance4.checked = true;
}

let performance5 = document.querySelector('#performance5');
if (performance5) { 
    performance5.checked = true;
}

let performance6 = document.querySelector('#performance6');
if (performance6) { 
    performance6.checked = true;
}

let performance7 = document.querySelector('#performance7');
if (performance7) { 
    performance7.checked = true;
}

let performance8 = document.querySelector('#performance8');
if (performance8) {
    performance8.checked = true;
}

//populate input fields
let firstName = document.querySelector('#firstname');
firstName.value = 'Aileen';

let lastName = document.querySelector('#lastname');
lastName.value = 'Wong';

let email = document.querySelector('#email');
email.value = 'aileen.m.wong@gmail.com';

let zip = document.querySelector('#zipcode');
zip.value = '11201';

//populate age verification
let age = document.querySelector('#age');
age.checked = true;

//populate number of tickets
let tickets = document.querySelector('#two_tickets');
tickets.checked = true;

}