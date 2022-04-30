const generate = document.querySelector('#generate');
const header = document.querySelector('.header');
const range = document.querySelector('#ran');
const numCheck = document.querySelector('.numcheck');
const letLower = document.querySelector('.letlower');
const letUpper = document.querySelector('.letupper');
const specialChar = document.querySelector('.specialchar');
const output = document.querySelector('.output');
// const lowerStr = "abcdefghijklmnopqrstuvwxyz";
// const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberStr = "0123456789";
// const specialStr = "!()*+,-./:;?'@[]^_`{|}~"

const characters = "!()*+,-./:;?='@[]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
output.innerHTML = "Length of Password: " + 16;

range.addEventListener('input', function () {
    output.innerHTML = "Length of Password: " + range.value;
}, false);

generate.onclick = () => {
    let password = "";
    for (let i = 0; i <= range.value - 1; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password)
    }
    if (password.length < range.value) {return}
    header.innerHTML = password;
    console.log(password.length)
}

