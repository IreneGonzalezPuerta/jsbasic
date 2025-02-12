let savingsInput = " ";
let savings = 0;


while (savings !== "salir") {
    savingsInput = prompt("Ingresa un monto de dinero (o salir para salir");
      if (savings === "salir") {
          console.log("Tus ahorros totales son " + savings);
      } else {
          const parsedSavingInput = parsefloat(savingsInput);
          savings += parsedSavingInput;
          console.log("Tus ahorros son  " + savings);
      }
}