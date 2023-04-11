const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.screen')

let getValues = []
let accumulation = ""

function calculate(button) {
    const value = button.textContent

    

    if (value === "CLEAR") {
        getValues = []
        screen.textContent = "."
    }else if (value === "="){
        try {
            screen.textContent = eval(accumulation)
            getValues = []
            getValues.push(eval(accumulation))
        } catch (error) {
            error.message = "You must add another number to calculate"
            alert(error.message)
        }
    } else{
        getValues.push(value)
        accumulation = getValues.join("")
        screen.textContent = accumulation
    }
}

buttons.forEach((button) =>{
    button.addEventListener('click', () => calculate(button))
})