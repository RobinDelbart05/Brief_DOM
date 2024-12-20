const btnOne = document.getElementById("p1");
const btnTwo = document.getElementById("p2");
const btnRes = document.getElementById("reset");
const score = document.getElementById("score");
const vmaxField = document.getElementById("inputNumb");
const vmaxTxt = document.getElementById("text");

let p1Score = document.getElementById("p1Value");
let p2Score = document.getElementById("p2Value");
let i = 0;
let j = 0;
scoring()
vmaxScore()


btnOne.addEventListener("click", function () {
    if (i < parseInt(vmaxField.value) && j < parseInt(vmaxField.value)) {
        i += 1;
    }
    scoring()
})
btnTwo.addEventListener("click", function () {
    if (j < parseInt(vmaxField.value) && i < parseInt(vmaxField.value)) {
        j += 1;
    }
    scoring()

})
btnRes.addEventListener("click", function reset() {
    i = 0;
    j = 0;
    scoring()
})

vmaxField.addEventListener("input", function () {
    vmaxScore();
})


function scoring() {
    p1Score.textContent = `${i}`;
    p2Score.textContent = `${j}`;

    if (i === parseInt(vmaxField.value)) {
        p1Score.style.color = "green";
    }
    else {
        p1Score.style.color = "black";
    }

    if (j === parseInt(vmaxField.value)) {
        p2Score.style.color = "green";
    }
    else {
        p2Score.style.color = "black";
    }
}

function vmaxScore() {
    vmaxTxt.textContent = `Playing to : ${vmaxField.value}`;

}
