const inputString = 'Hello World';
console.log('Before reversed the string is: ',inputString);



setTimeout(() => {
    const reversedString = inputString.split('').reverse().join('');
    console.log('After reversed the string is: ',reversedString);
},2000);