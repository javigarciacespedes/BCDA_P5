var Contador = artifacts.require("./Contador.sol");

contract("Usamos un Contador:", (accounts) => {
  let contador;

  before(async () => {
    contador = await Contador.deployed();
  });

  it("el valor inicial debe ser 0", () => {
    return contador.valor.call().then(function (value) {
      assert.equal(value.toNumber(), 0, "El valor inicial no es 0.");
    });
  });

  it("el valor inicial debe ser 0", async () => {
    const value = await contador.valor.call();
    assert.equal(value.toNumber(), 0, "El valor inicial no es 0.");
  });

  it("incrementar en uno el contador", () => {
    let c1, c2;
    return contador.valor
      .call()
      .then((value) => {
        c1 = value;
        return contador.incr();
      })
      .then(() => contador.valor.call())
      .then((value) => {
        c2 = value;
        const incr = c2.sub(c1);
        assert.equal(incr.toNumber(), 1, "El incremento del valor no es 1.");
      });
  });

  it("cambiar el valor del contador", () => {
    let c1, c2;
    return contador.valor
      .call()
      .then((value) => {
        c1 = value;
        return contador.set(7);
      })
      .then(() => contador.valor.call())
      .then((value) => {
        c2 = value;
        const incr = c2
        assert.equal(incr.toNumber(), 7, "El valor del contador no es 7.");
      });
  });
});
