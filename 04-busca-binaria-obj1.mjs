let comps

 function buscaBinaria(vetor,valorBusca) {
     comps = 0
     let ini = 0
     let fim = vetor.length -1
     let meio
     while(fim >= ini) {
        meio = Math.floor((fim + ini) / 2) // Math.floor() arredonda para baixo
        switch(fnComp(vetor[meio])) {
            case 0: /// Achou
                comps++
                return meio
            case 1:   // Valor de busca é MAIOR
                comps += 2
                ini = meio + 1
                break
            default:    // Valor de busca é MENOR
                comps += 2
                fim = meio - 1
            }
        }
        return -1 // Não existe
     }
        /*if(vetor[meio] === valorBusca) {
            comps++
            return meio // Achou
        }
        else if(valorBusca > vetor[meio]) {
            comps += 2
            ini = meio + 1
        }
        else {
            comps += 2
            fim = meio - 1
        }*/
 
 // A função de comparação para a busca binária precisa retornar um dos 3 valores
 // retorno  0: o valor de busca e o valor no objeto são iguais
 // retorno -1: o valor de busca é menor que o valor do objeto
 // retorno  1: o valor de busca é MAIOR que o valor no objeto
 const comparaNome = (obj, busca = 'FAUSTO') => {
     if('FAUSTO' === obj.first_name) return 0
     else if('FAUSTO' < obj.first_name) return -1
     else return 1
 }