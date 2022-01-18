let login;
let message;

login = 'dawdw';

if (login == 'Pitter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = '';
}
console.log('just if else answer= '+message);


login = ('Pitter' || 'Owner')
    ? message = 'Hello'
    :  (login == '' ? message = 'unknown' : message = '');

console.log('just ? :  answer='+message);
