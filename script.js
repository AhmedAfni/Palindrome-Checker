const txtInput = document.querySelector(".inputs input"); 
const checkBtn = document.querySelector(".inputs button");
const infoText = document.querySelector(".info-text"); 
let filterInput;

checkBtn.addEventListener("click", () => {
    // Splitting user input characters, reversing them,
    // and joining them into a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    console.log(filterInput, reverseInput);
    if(filterInput !== reverseInput) {
        return infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome`;
    }
    infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome`;
});

txtInput.addEventListener("keyup", () => {
    // Removing spaces & all special characters from the entered value
    filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/gi, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
});
