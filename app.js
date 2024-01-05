let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let mainBody = document.querySelector(".mainBody");

let turn0 = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 5],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerHTML = "X";
            turn0 = false;
            box.disabled = true;
        } else {
            box.innerHTML = "O";
            turn0 = true;
            box.disabled = true;
        }

        checkWinner();
    });
});



const checkWinner = () => {
    for (patterns of winPattern) {
        let pos1Val = boxes[patterns[0]].innerHTML;
        let pos2Val = boxes[patterns[1]].innerHTML;
        let pos3Val = boxes[patterns[2]].innerHTML;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBox();
                showWinner(pos1Val);
            }
        }
    }
};

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
};

const showWinner = (pos1Val) => {
    msgContainer.classList.remove("hide");
    mainBody.classList.add("hide");
    msg.innerHTML = msg.innerHTML + `${pos1Val}`;
};

resetBtn.addEventListener("click", () => {
    for (box of boxes) {
        box.innerHTML = "";
    }
    enableBox();
});
newBtn.addEventListener("click", () => {
    for (box of boxes) {
        box.innerHTML = "";
        msgContainer.classList.add("hide");
        mainBody.classList.remove("hide");
        msg.innerHTML = "The Winner is ";
    }
    enableBox();
});
