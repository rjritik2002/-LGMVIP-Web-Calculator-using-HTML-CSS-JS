const input = document.getElementById('input');

const showInput = (event) => {
    console.log(event.innerHTML);
    input.value = input.value + event.innerHTML;
}

const clearScreen = () => {
    input.value = "";
}

const result = () => {
    const res = eval(input.value);
    input.value = res;
}
