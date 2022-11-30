module.exports = async callback => {
    const Contador = artifacts.require("./Contador.sol");
    let contador = await Contador.deployed();
    let c1 = await contador.valor.call();
    await contador.incr();
    await contador.incr();
   
    let result = await contador.incr();
    console.log(result);
    // Iterar por los eventos para ver si se disparo el evento Tic.
    result.logs.forEach(log => {
    if (log.event == "Tic") {
    const msg = log.args.msg;
    const out = log.args.out;
    console.log(`LOG: ${msg} >> ${out}`);
    }
    });
    let c2 = await contador.valor.call();
    const incr = c2.sub(c1);
    console.log("El incremento del valor es", incr.toNumber());
    callback();
   };