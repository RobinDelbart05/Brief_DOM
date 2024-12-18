const nextButton = document.getElementById("btn");
console.log(nextButton);
const coloredBlock = document.getElementsByClassName("block")[0];
console.log(coloredBlock);
const paragraph = document.getElementById("text");
let count = 0;

const colors = ["rgb(117, 42, 42)", "rgb(42, 56, 117)", "rgb(66, 117, 42)", "rgb(116, 117, 42)"];
const texts = ["Image 1", "Image 2", "Image 3", "Image 4"];



nextButton.addEventListener("click", function () {
    count += 1;
    // console.log(count);
    if (count == 4) {
        count = 0;
    }

    coloredBlock.style.backgroundColor = colors[count];
    paragraph.textContent = texts[count];
})



