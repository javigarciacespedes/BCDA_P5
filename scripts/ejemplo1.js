module.exports = async callback => { // Usando async aqui
    try {
    const Contador = artifacts.require("./Contador.sol");
    let contador = await Contador.deployed();
    let c1 = await contador.valor.call();
   
    await contador.incr();
    await contador.incr();
    await contador.incr();
    await contador.incr();
    let c2 = await contador.valor.call();
    const incr = c2.sub(c1);
    console.log("El incremento del valor es", incr.toNumber());
    } catch(err) { // Capturar errores
    console.log(`Error: ${err}`);
    }
    callback(); // Terminar
};