// document.getElementById("count-el").innerText = 5;

let count = 0;
let Saves = document.getElementById("saves-txt");
let saveNum = 0;

let addNumber = parseInt(window.prompt("How much do you want to add?"));
let subNumber = parseInt(window.prompt("How much do u wanna substract?"));
let resetNumber = parseInt(window.prompt("What should the reset button be?"));

function increment() {
    count = count + addNumber
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function substract() {
    count = count - subNumber
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function reset() {
    count = resetNumber;
    console.log(count);
    document.getElementById("count-el").innerText = count;
}

function save() {
    saveNum++;
    let newSave = "Save " + saveNum + " = " + count + ";";
    Saves.innerText = Saves.innerText + " " + newSave;
    count = 0;
    document.getElementById("count-el").innerText = count;
}
