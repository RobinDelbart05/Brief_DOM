const input = document.getElementById("inputField");
const btn = document.getElementById("addButton");
const list = document.getElementById("listing");

btn.addEventListener("click", function () {
    const i = input.value.trim();
    // console.log(i);
    if (i !== "") {
        const newObject = document.createElement("li");
        newObject.textContent = i;
        list.appendChild(newObject);

    }

})