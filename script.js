// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input

}


function cleardisplay() {
    display.value = ''
}

function deletenumber() {
    display.value = display.value.slice(0, -1)

}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error Bruh";

    }

}