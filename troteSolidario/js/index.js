function calcular(){
    // recupera o valor da ação social digitado

    //declaração de variável sem tipo (JS não é tipável)
    let acaoSocial = document.getElementById("acaoSocial").value

    //recupera o valor digitado em homenagem
    let homenagem = document.getElementById("homenagem").value

    acaoSocial = Number(acaoSocial)
    homenagem = Number(homenagem)

    let soma = acaoSocial + homenagem

    alert(soma)
}