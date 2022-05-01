const generate = document.querySelector('#generate');
const header = document.querySelector('.header');
const range = document.querySelector('#ran');
const numCheck = document.querySelector('.numcheck');
const letLower = document.querySelector('.letlower');
const letUpper = document.querySelector('.letupper');
const specialChar = document.querySelector('.specialchar');
const output = document.querySelector('.output');
const lowerStr = "abcdefghijklmnopqrstuvwxyz";
const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberStr = "0123456789";
const specialStr = "!()*+,-./:;?'@[]^_`{|}~"

let characters = "";
output.innerHTML = "Length of Password: " + 16;

range.addEventListener('input', function () {
    output.innerHTML = "Length of Password: " + range.value;
}, false);

generate.onclick = () => {
    let password = "";
    isChecked(numCheck, letLower, letUpper, specialChar)
    for (let i = 0; i <= range.value - 1; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(characters)
    }
    if (password.length < range.value) {return}
    header.innerHTML = password;
    console.log(password.length)
}

function isChecked(a, b, c, d) {
    if (!a.checked && !b.checked && !c.checked && !d.checked){
        return characters;
    } else if (a.checked && !b.checked && !c.checked && !d.checked) {
        return characters = numberStr;
    } else if (!a.checked && b.checked && !c.checked && !d.checked) {
        return characters = lowerStr;
    } else if (!a.checked && !b.checked && c.checked && !d.checked) {
        return characters = upperStr;
    } else if (!a.checked && !b.checked && !c.checked && d.checked) {
        return characters = specialStr;
    } else if (a.checked && b.checked && !c.checked && !d.checked) {
        return characters = numberStr + lowerStr;
    } else if (a.checked && !b.checked && c.checked && !d.checked) {
        return characters = numberStr + upperStr;
    } else if (a.checked && !b.checked && !c.checked && d.checked) {
        return characters = numberStr + specialStr;
    } else if (!a.checked && b.checked && c.checked && !d.checked) {
        return characters = lowerStr + upperStr;
    } else if (!a.checked && b.checked && !c.checked && d.checked) {
        return characters = lowerStr + specialStr;
    } else if (!a.checked && !b.checked && c.checked && d.checked) {
        return characters = upperStr + specialStr;
    } else if (a.checked && b.checked && c.checked && !d.checked) {
        return characters = numberStr + lowerStr + upperStr;
    } else if (a.checked && b.checked && !c.checked && d.checked) {
        return characters = numberStr + lowerStr + specialStr;
    } else if (a.checked && !b.checked && c.checked && d.checked) {
        return characters = numberStr + upperStr + specialStr;
    } else if (!a.checked && b.checked && c.checked && d.checked) {
        return characters = lowerStr + upperStr + specialStr;
    } else if (a.checked && b.checked && c.checked && d.checked) {
        return characters = numberStr + lowerStr + upperStr + specialStr
    }
}

