function randomNumber(digit){
    return Math.floor(Math.random() * digit) + 1;
}

function NumberGenerator(val) {
    let intervalid = setInterval(() => {
        console.log(`${val} remaining to print randomNumber ....`);
        val--;
        
        if(val === 0){
            clearInterval(intervalid);
            const random = randomNumber(100);
            console.log('Random Number is ',random)
        }
    },1000);

    
} 

NumberGenerator(3);

