const range = document.querySelector('#ran');
let length = 9;

range.onchange = (e) => {
    document.querySelector('label[for="size"]').textContent = "Length of Password:   "
    document.querySelector('label[for="size"]').textContent += e.target.value;
    return length = e.target.value;
}
