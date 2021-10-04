const txtSexoOutros = document.querySelector('#txtSexoOutros')
const optSexo = document.querySelectorAll('input[name="sexo"]')
const optSexoOutros = document.querySelector('#optSexoOutros')
const btnEnviar = document.querySelector('input[type="submit"]')


function paraMaiusculo(){
    const inputMaiusculo = document.querySelectorAll('.maiusculo')
    inputMaiusculo.forEach((input) => {
        input.addEventListener('change', () => {
            input.value = input.value.toUpperCase()
        })  
    })
}


function habilitaSexoOutros() {
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

function enviarForm() {
    btnEnviar.addEventListener('click', () => {
        if (optSexoOutros.checked) {
            optSexoOutros.value = txtSexoOutros.value
            txtSexoOutros.disabled = true
        }
    })
}

paraMaiusculo()
habilitaSexoOutros()
enviarForm()