const currentNum = document.querySelector('.currentNum')
const memNum = document.querySelector('.memNum')
const operation = document.querySelector('.operation')
const result = document.querySelector('.result')


function typeNum(num) {
    if (num == '.' && !currentNum.innerText.includes('.') && currentNum.innerText.length >= 1) {
        result.innerText = ''
        currentNum.innerText += num
    } else if ((num == '0' && currentNum.innerText.length < 1) || (num == 0 && currentNum.innerText.length > 1)) {
        result.innerText = ''
        currentNum.innerText += num
    } else if (num != '0' && num != '.') {
        result.innerText = ''
        currentNum.innerText += num
    }
}

function operator(op) {
    if (currentNum.innerText != '') {
        memNum.innerText = currentNum.innerText
        currentNum.innerText = ''
        operation.innerText = op
    } else if (result.innerText != '') {
        memNum.innerText = result.innerText
        result.innerText = ''
        operation.innerText = op
    }
}

function calculate() {
    if (memNum.innerText != '' && currentNum.innerText != '' && operation.innerText != '') {
        switch(operation.innerText) {
            case '+':
                result.innerText = parseFloat(memNum.innerText) + parseFloat(currentNum.innerText)
                currentNum.innerText = ''
                memNum.innerText = ''
                operation.innerText = ''
                break
            case '-':
                result.innerText = parseFloat(memNum.innerText) - parseFloat(currentNum.innerText)
                currentNum.innerText = ''
                memNum.innerText = ''
                operation.innerText = ''
                break
            case '*':
                result.innerText = parseFloat(memNum.innerText) * parseFloat(currentNum.innerText)
                currentNum.innerText = ''
                memNum.innerText = ''
                operation.innerText = ''
                break
            case '/':
                result.innerText = parseFloat(memNum.innerText) / parseFloat(currentNum.innerText)
                currentNum.innerText = ''
                memNum.innerText = ''
                operation.innerText = ''
                break  
        }
    }
}

function clearDisplay() {
    result.innerText = ''
    currentNum.innerText = ''
    memNum.innerText = ''
    operation.innerText = ''
}

function cancelEntry() {
    result.innerText = ''
    currentNum.innerText = ''
}

function del() {
    result.innerText = ''
    currentNum.innerText = currentNum.innerText.slice(0, -1)
}