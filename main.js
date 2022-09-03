const buttonComplete = document.querySelector('form button')
buttonComplete.addEventListener('click', (e) =>{
    e.preventDefault()

    checkForm()
})

const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#number')
const inputMM = document.querySelector('#MM')
const inputYY = document.querySelector('#YY')
const inputCVC = document.querySelector('#CVC')

function checkForm(){
    
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

const cardNumber = document.querySelector('#cardNumber')
const cardName = document.querySelector('#cardName')
const cardMM = document.querySelector('#cardMM')
const cardYY = document.querySelector('#cardYY')
const cardCVC = document.querySelector('#cardCVC')

function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()",1)
}
function execmask(){
    v_obj.value=v_fun(v_obj.value)
}
function mcc(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
    v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
    v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('number').onkeyup = function(){
		mask( this, mcc );
        cardNumber.textContent = inputNumber.value
	}
    id('name').onkeyup = function(){
        cardName.textContent = inputName.value
    }
    id('MM').onkeyup = function(){
        cardMM.textContent = inputMM.value
    }
    id('YY').onkeyup = function(){
        cardYY.textContent = inputYY.value
    }
    id('CVC').onkeyup = function(){
        cardCVC.textContent = inputCVC.value
    }
}