
let display = document.getElementById('display')

let numArray = []
let nextNumArray = []
let step = 0
let operation = ''

function getNumber(num) {
    if (step==0) {
        numArray += num
        display.value = numArray
    } else {
        nextNumArray += num
        display.value = nextNumArray
    }
}

function getOperation(op) {
    step ++
    operation = op
}

function calculate() {
    numArray = Number(numArray)
    nextNumArray = Number(nextNumArray)
    
    if (operation=='+') {
        display.value = numArray + nextNumArray
    } else if (operation=='-') {
        display.value = numArray - nextNumArray
    } else if (operation=='/') {
        display.value = numArray / nextNumArray
    } else if (operation=='x') {
        display.value = numArray * nextNumArray
    }
}

function clearDisplay() {
    numArray = []
    nextNumArray = []
    step = 0
    operation = ''
    display.value = ''
}