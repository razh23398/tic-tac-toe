let hole1 = null
let hole2 = null
let hole3 = null
let hole4 = null
let hole5 = null
let hole6 = null
let hole7 = null
let hole8 = null
let hole9 = null
let hole11 = document.querySelector(".btn1")
let hole22 = document.querySelector(".btn2")
let hole33 = document.querySelector(".btn3")
let hole44 = document.querySelector(".btn4")
let hole55 = document.querySelector(".btn5")
let hole66 = document.querySelector(".btn6")
let hole77 = document.querySelector(".btn7")
let hole88 = document.querySelector(".btn8")
let hole99 = document.querySelector(".btn9")

let xoro = document.querySelector(".xoro")


let turn = "0"
xoro.innerHTML = turn;
console.log(turn)


const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    if (turn === "0"){
        if (button.innerHTML === "X" || button.innerHTML === "0"){
            alert("not valid!")
            turn = "0"
            xoro.innerHTML = "0"
        }else{
            button.innerHTML = "0"
            lookForWin()
            turn = "X"
            xoro.innerHTML = "X"
        }
    }else if (turn === "X"){
        if (button.innerHTML === "0" || button.innerHTML === "X"){
            alert("valid!")
            turn = "X"
            xoro.innerHTML = "X"
        }
        else{
            button.innerHTML = "X"
            lookForWin()
            turn = "0"
            xoro.innerHTML = "0"
        }
    }
  });
});

const restartBtn = document.querySelector(".restart")
const wining = document.querySelector(".wining")

function lookForWin(){
    // LOOK FOR X WINS
    if (hole11.innerHTML === "X" && hole22.innerHTML === "X" && hole33.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole44.innerHTML === "X" && hole55.innerHTML === "X" && hole66.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole77.innerHTML === "X" && hole88.innerHTML === "X" && hole99.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole11.innerHTML === "X" && hole44.innerHTML === "X" && hole77.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole22.innerHTML === "X" && hole55.innerHTML === "X" && hole88.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole33.innerHTML === "X" && hole66.innerHTML === "X" && hole99.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole11.innerHTML === "X" && hole55.innerHTML === "X" && hole99.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    if (hole77.innerHTML === "X" && hole55.innerHTML === "X" && hole33.innerHTML === "X") {
        console.log("x win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "X win !"
    }
    // LOOK FOR 0 WINS
    if (hole11.innerHTML === "0" && hole22.innerHTML === "0" && hole33.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole44.innerHTML === "0" && hole55.innerHTML === "0" && hole66.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole77.innerHTML === "0" && hole88.innerHTML === "0" && hole99.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole11.innerHTML === "0" && hole44.innerHTML === "0" && hole77.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole22.innerHTML === "0" && hole55.innerHTML === "0" && hole88.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole33.innerHTML === "0" && hole66.innerHTML === "0" && hole99.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole11.innerHTML === "0" && hole55.innerHTML === "0" && hole99.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole77.innerHTML === "0" && hole55.innerHTML === "0" && hole33.innerHTML === "0") {
        console.log("0 win !!!!")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "0 win !"
    }
    if (hole11.innerHTML != "" && hole22.innerHTML != "" && hole33.innerHTML
    != "" && hole44.innerHTML != "" && hole55.innerHTML != "" && hole66.innerHTML
    != "" && hole77.innerHTML != "" && hole88.innerHTML != "" && hole99.innerHTML != "")
    {
        console.log("draw !")
        restartBtn.classList.add("non-hide")
        restartBtn.classList.remove("hide")
        wining.innerHTML = "draw !"
    }
}






