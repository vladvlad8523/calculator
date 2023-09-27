let currentInput = ""
let currentResult = ""
const output = document.getElementById("output");
const keys = document.querySelectorAll(".calculator__key")
 
export function handleButtonClick(keyValue) {
    if (keyValue === "=") {
        try {
            currentInput = currentInput.replace(/x/g, '*').replace(/÷/g, '/')
 
            currentResult = eval(currentInput)
 
            output.textContent = currentResult;
 
            currentInput = currentResult.toString();
        } catch (error) {
            output.textContent = "Error";
        }
    } else if (keyValue === "AC") {
        currentInput = ""
        currentResult = ""  
        output.textContent ="0"
    } else {
        currentInput += keyValue
        output.textContent = currentInput
    }
 
}
 
export function handleKeyBoardInput(key) {
    const validKeys = "0123456789.+*/"
 
    if (validKeys.includes(key)) {
        const targetButton = Array.from(keys).find(
            (button) => button.getAttribute("aria-label") === key
        )
 
        if (targetButton) {
            targetButton.click()
        }
    }
}
 
keys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyValue = key.textContent;
 
        handleButtonClick(keyValue)
    })
})
 
document.addEventListener("keydown", (event) => {
    const key = event.key;
    handleKeyBoardInput(key);
})