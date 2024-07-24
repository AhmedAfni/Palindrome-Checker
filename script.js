const txtInput = document.querySelector(".inputs input"); 
checkBtn = document.querySelector(".inputs button")

txtInput.addEventListener("keyup", () => {
    //removing spaces & all special characters from entered value
    let filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, "")
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
})