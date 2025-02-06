fetch("./dados.json").then(function(resposta){
    return resposta.json()
}).then(function(json){
    const divPessoa = document.createElement("div")
    const paragrafo = document.createElement("p")

    const frase = `meu nome é ${json.nome}, tenho${json.idade} e sou ${json.profissao}`;

    paragrafo.innerText = frase;

    divPessoa.appendChild(paragrafo);

    document.getElementById("app").appendChild(divPessoa);
})