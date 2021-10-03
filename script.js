const optSexoOutro = document.querySelector('#optSexoOutro')

optSexoOutro.addEventListener('change', () => {
    const txtSexoOutro = document.querySelector('#txtSexoOutro')
    if (optSexoOutro.checked == true) {
        txtSexoOutro.disabled = false
    } else {
        txtSexoOutro.disabled = true
    }
    
})
