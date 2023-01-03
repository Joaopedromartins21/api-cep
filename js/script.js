async function buscaEndereco(cep) {
        const mensagemErro = document.getElementById('erro')
        mensagemErro.innerHTML = ""
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCep.json()
        if (consultaCepConvertida.erro) {
            throw Error ('Cep nao existente!')
        }
        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')

        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.estado
            console.log(consultaCepConvertida)
            return consultaCepConvertida
}catch (erro) {
    mensagemErro.innerHTML = `<p>CEP invalido Tente Novamente!</p>`
    console.log(erro)
}

}

const cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))




