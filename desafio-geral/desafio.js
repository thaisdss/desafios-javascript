function verificarAno(){
    let anoinput = document.getElementById('ano');
    let ano = Number(anoinput.value);
    let res = document.getElementById('res')

    if(ano == 0){
        alert('É necessário informar um ano para calcular se ele é bissexto ou não!')
    }else{
        let calculo = ano%4;

        if(calculo == 0){
            res.innerHTML = `O ano ${ano} é um ano Bissexto!`
        }else{
            res.innerHTML = `O ano ${ano} não é um ano Bissexto!`
    }
}
}

function verificarSituacao(){
let nome = document.getElementById('nome')
let nota1 = parseFloat(document.getElementById('nota1').value)
let nota2 = parseFloat(document.getElementById('nota2').value)
let nota3 = parseFloat(document.getElementById('nota3').value)
let res2 = document.getElementById('res2')

if(nome.value.length < 3){
    alert('Insira um nome válido')
    nome.value = ""
    nome.focus()
}else{
let media = (nota1+nota2+nota3)/3


res2.innerHTML = `<p><strong>Analisando a situação de ${nome.value}</strong></p>`
res2.innerHTML += `<p>Com as notas ${nota1}, ${nota2} e ${nota3} a média é ${media}</p>`

if(media > 6){
    res2.innerHTML += "<p>Com média acima de 6.0 o aluno está <spam id='aprovado'>APROVADO</spam><p>"
}

if(media >= 3 && media <= 6){
    res2.innerHTML += "<p>Com média entre 3.0 e 6.0 o aluno está em <spam id='recuperacao'>RECUPERAÇÃO</spam><p>"
    }
    
if(media < 3.0){
    res2.innerHTML += "<p>Com média abaixo de 3.0 o aluno está <spam id='reprovado'>REPROVADO</spam><p>"
}}
}

function limpar(){
    let res = document.getElementsByClassName('res')
    let input = document.getElementsByClassName('input')

    for(i=0; res[i]; i++){
        res[i].innerHTML = ""
    }

    for(i=0; input[i]; i++){
        input[i].value = ""
    }

}