let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');
let toggle = document.getElementById('toggle');
let body = document.querySelector('body');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input' , () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click' , () => {
    passBox.value = generatepassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatepassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars =="" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
        i++;
    }

    return genPassword;
}
copyIcon.addEventListener('mouseover' , () => {
    copyIcon.title = "Copy the Password";
})

copyIcon.addEventListener('click' , () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        } , 3000)
    }
})