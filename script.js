const txtInput = document.querySelector(".inputs input"); 
const checkBtn = document.querySelector(".inputs button");
let filterInput;

checkBtn.addEventListener("click", () => {
    console.log(filterInput);
});

txtInput.addEventListener("keyup", () => {
    // Removing spaces & all special characters from entered value
    filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});
