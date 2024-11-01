const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];

const exchangeRate = 80;

function exchangeIntoINR(price){
    return price*exchangeRate;
}


const arr = items.map((item) => {
   return {...item, priceINR: exchangeIntoINR(item.priceUSD)}
});

console.log(arr)

