function pesquisaSatisfacao() {

    let nota
    let media
    let somaNotas
    let satisfeito
    let insastifeito
    let indice
    let regular

    satisfeito = 0
    insastifeito = 0
    regular = 0
    indice = 1
    somaNotas = 0

    while (indice <= 10) {
       nota = prompt(`Informe a nota ${indice}`) 
       nota = Number(nota)
       somaNotas = somaNotas + nota

       if(nota >= 8){
        satisfeito = satisfeito + 1
       } else if(nota <= 5){
        insastifeito = insastifeito + 1
       } else{
        regular = regular + 1
       }
       indice ++
    }

    media = somaNotas / 10

        alert(`A média das notas é ${media}
O número de notas com valor satisfeito é: ${satisfeito}
O número de notas regulares é ${regular}
E o número de pessoas insastifeitas é ${insastifeito}
        `)
}