const txtSexoOutros = document.querySelector('#txtSexoOutros')
const optSexo = document.querySelectorAll('input[name="sexo"]')
const optSexoOutros = document.querySelector('#optSexoOutros')
const btnEnviar = document.querySelector('input[type="submit"]')


function paraMaiusculo(){ // Padroniza os dados do form colocando em maiusculo dados não sensiveis
    const inputMaiusculo = document.querySelectorAll('.maiusculo')
    inputMaiusculo.forEach((input) => {
        input.value = input.value.toUpperCase()
    })
}


function habilitaSexoOutros() { // Habilita inserção manual de outras opções pra sexo
    optSexo.forEach((opt) => {
        opt.addEventListener('change', () => {
            if (optSexoOutros.checked) {
                txtSexoOutros.disabled = false
            } else {
                txtSexoOutros.disabled = true
                txtSexoOutros.value = ''
            }
        })
    })
}

const inputCEP = document.querySelector('#cep')

inputCEP.addEventListener('change', () => {
    preencheEndereco(parseInt(inputCEP.value))
})

async function preencheEndereco(cep) { // Busca na API as informações de endereço a partir do CEP e preenche form
    try {
        let res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let endereco = await res.json()
        const logradouro = document.querySelector('#logradouro')
        const bairro = document.querySelector('#bairro')
        const cidade = document.querySelector('#cidade')
        const uf = document.querySelector('#uf')

        logradouro.value = endereco.logradouro
        bairro.value = endereco.bairro
        cidade.value = endereco.localidade
        uf.value = endereco.uf 

    } catch(e){
        console.error(e.message)
    }
}


function enviarForm() {
    btnEnviar.addEventListener('click', () => {
        paraMaiusculo()
        if (optSexoOutros.checked) {
            optSexoOutros.value = txtSexoOutros.value // Transfere dados do input de texto para a opção "Outros" padronizando dados
            txtSexoOutros.disabled = true // Evita que o dado seja duplicado desabilitando o input antes de enviar dados
        }
    })
    
}

habilitaSexoOutros()
enviarForm()