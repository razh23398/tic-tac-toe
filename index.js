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
let winCheck = 0

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
            lookForDraw()
            turn = "X"
            xoro.innerHTML = "X"
            console.log(winCheck)
        }
    }else if (turn === "X"){
        if (button.innerHTML === "0" || button.innerHTML === "X"){
            alert("not valid!")
            turn = "X"
            xoro.innerHTML = "X"
        }
        else{
            button.innerHTML = "X"
            lookForWin()
            lookForDraw()
            turn = "0"
            xoro.innerHTML = "0"
            console.log(winCheck)
        }
    }
  });
});

const restartBtn = document.querySelector(".restart")
const wining = document.querySelector(".wining")

function lookForWin() {
    const winConditions = [
      [hole11, hole22, hole33],
      [hole44, hole55, hole66],
      [hole77, hole88, hole99],
      [hole11, hole44, hole77],
      [hole22, hole55, hole88],
      [hole33, hole66, hole99],
      [hole11, hole55, hole99],
      [hole77, hole55, hole33]
    ];
    for (const condition of winConditions) {
      if (condition.every(el => el.innerHTML === "X")) {
        restartBtn.classList.remove("hide");
        wining.innerHTML = "X win !";
        winCheck = 1;
        break;
      } else if (condition.every(el => el.innerHTML === "0")) {
        restartBtn.classList.remove("hide");
        wining.innerHTML = "0 win !";
        winCheck = 1;
        break;
      }
    }
  }

function lookForDraw(){
    if (hole11.innerHTML != "" && hole22.innerHTML != "" && hole33.innerHTML
    != "" && hole44.innerHTML != "" && hole55.innerHTML != "" && hole66.innerHTML
    != "" && hole77.innerHTML != "" && hole88.innerHTML != "" && hole99.innerHTML != "" && winCheck === 0)
        {
            console.log("draw !")
            restartBtn.classList.add("non-hide")
            restartBtn.classList.remove("hide")
            wining.innerHTML = "draw !"
        }
}

