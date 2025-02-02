

const precios = [10.99, 5.99, 20, 3.5];

const precioTotal = precios.reduce((a, b) =>{
    // console.log(a);
    // console.log(b);
    return a + b;
});

console.log( precioTotal);