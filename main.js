const buttonComplete = document.querySelector('form button')
buttonComplete.addEventListener('click', (e) =>{
    e.preventDefault()

    checkForm()
})

function checkForm(){
    const inputName = document.querySelector('#name')
    const inputNumber = document.querySelector('#number')
    const inputMM = document.querySelector('#MM')
    const inputYY = document.querySelector('#YY')
    const inputCVC = document.querySelector('#CVC')

    const name = inputName.value.trim()
    const number = inputNumber.value.trim()
    const MM = inputMM.value.trim()
    const YY = inputYY.value.trim()
    const CVC = inputCVC.value.trim()
    if(name === ''){
        const errorMsg = inputName.parentElement.querySelector('small:nth-child(3)')
        errorMsg.style.visibility = 'visible'
        inputName.style.border = '1px solid var(--Red)'
    }
    if(number === ''){
        const errorMsg = inputNumber.parentElement.querySelector('small:nth-child(6)')
        errorMsg.style.visibility = 'visible'
        inputNumber.style.border = '1px solid var(--Red)'
    }
    if(MM === ''){
        const errorMsg = inputMM.parentElement.parentElement.querySelector('small')
        errorMsg.style.visibility = 'visible'
        inputMM.style.border = '1px solid var(--Red)'
    }
    if(YY === ''){
        const errorMsg = inputYY.parentElement.parentElement.querySelector('small')
        errorMsg.style.visibility = 'visible'
        inputYY.style.border = '1px solid var(--Red)'
    }
    if(CVC === ''){
        const errorMsg = inputCVC.parentElement.querySelector('small')
        errorMsg.style.visibility = 'visible'
        inputCVC.style.border = '1px solid var(--Red)'
    }
}