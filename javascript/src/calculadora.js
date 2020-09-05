/*
 * Essa é uma calculadora bem legal!!!
 */
const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
        this._resultado += soma
        return this
    },
    potencia(a, b) {
        const potencia = a ** b
        this._resultado += potencia
        return this
    },
    zerar() {
        this._resultado = 0
        return this
    },
    log() {
        console.log(this._resultado)
    }
}

//Calculadora.somar(2, 3).potencia(2, 8).somar(4, 5).log()

//const r = Calculadora.somar(2, 3).potencia(2, 8).somar(4, 5).resultado
//console.log(r)

Calculadora.somar(2, 3).potencia(2, 8).zerar().somar(4, 5).log()