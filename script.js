

const dialog = document.getElementById("myDialog");

document.getElementById("openAbout").onclick = (e) => {
    e.preventDefault();
    dialog.showModal();
};

document.getElementById("openContact").onclick = (e) => {
    e.preventDefault();
    dialog.showModal();
};

document.getElementById("openHome").onclick = (e) => {
    e.preventDefault();
    dialog.showModal();
};

document.getElementById("closeBtn").onclick = () => {
    dialog.close();
};



function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
if (appendToDisplay(value) == '+') {
    alert("addition")

}
function handleClick() {
    calculate();
    addToHistory();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = 'Error';
    }
}
console.log("now this fuction will add whole equation and result to history");

function addToHistory() {
    historyList = document.getElementById('history-list');
    const display = document.getElementById('display');
    const listItem = document.createElement('li');
    listItem.textContent = display.value;
    historyList.append(listItem);
}
