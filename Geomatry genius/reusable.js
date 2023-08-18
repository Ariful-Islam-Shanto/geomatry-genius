//Calculating parallelogram area
function calculateParallelogramArea () {
    const base = getInputValueById('parallelogramBase');
    const height = getInputValueById('parallelogramHeight');
    if(!base || !height) {
        return alert("Please give a number!")
    }
    //calculate the area
    const area = base * height;

    //set area value using function
    setElementInnerTextValue('paraArea', area);
}

//Get input value using function
function getInputValueById(inputField) {
    const input = document.getElementById(inputField);
    const inputFieldValue = input.value;
    const value = parseFloat(inputFieldValue);
    //wipe the input field
    input.value = '';
    return value;
}

//set area value using function 
function setElementInnerTextValue(element, value) {
    document.getElementById(element).innerText = value;
}