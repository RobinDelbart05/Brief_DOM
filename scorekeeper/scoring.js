const btnOne = document.getElementById("p1");
const btnTwo = document.getElementById("p2");
const btnRes = document.getElementById("reset");
const score = document.getElementById("score");
const vmaxField = document.getElementById("inputNumb");
const vmaxTxt = document.getElementById("text");
let i = 0;
let j = 0;
scoring()
vmaxScore()


btnOne.addEventListener("click", function () {
    i += 1;
    // console.log(i);
    scoring()
})
btnTwo.addEventListener("click", function () {
    j += 1;
    scoring()
    // console.log(j);

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
    score.textContent = `${i} to ${j}`;
}

function vmaxScore() {
    vmaxTxt.textContent = `Playing to : ${vmaxField.value}`;

}

console.log(vmaxField.value);


