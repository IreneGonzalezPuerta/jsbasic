const edades = [12, 17, 22, 8, 34, 15];

const mayorEdad = edades.filter((x)=> {
    return (x) >= 18;
});

console.log(mayorEdad);