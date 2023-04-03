const { sum } = require("../src/index");

// O describe cria grupos de testes0
describe("math functions", () => {
    beforeAll(() => { // Executa um código antes de todos os testes (it())
        console.log("Before all, show this console!");
    });
    beforeEach(() => { // Executa um código antes de cada teste
        console.log("Before each, show this console!");
    });
    afterAll(() => { // Executa um código depois de todos os testes
        console.log("After all, show this console!");
    });
    afterEach(() => { // Executa um código depois de cada teste
        console.log("After each, show this console!");
    });
    it('sums 2 numbers', () => { // Executa o teste
        expect(sum(1, 2)).toBe(3); // Algo como "espera-se que soma(1, 2) seja 3"
    });
});