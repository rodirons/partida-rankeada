let nivel = ""

function calculoRanqueadas(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    if (saldoVitorias < 10){
        nivel = "Ferro" 
    }
    else if (saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze" 
    }
    else if (saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = "Prata" 
    }
    else if (saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = "Ouro" 
    }
    else if (saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = "Diamante" 
    }
    else if (saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendário" 
    }
    else {
        nivel = "Imortal" 
    }

    return saldoVitorias 
}

let totalDePontos = calculoRanqueadas(106,24)
console.log(`O Herói tem ${totalDePontos} saldos de vitorias e está no nível ${nivel}` )
