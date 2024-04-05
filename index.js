const box = document.querySelectorAll(".cell");
const h = document.getElementsByClassName(".heading")

box.forEach(box => {
    box.addEventListener("click", handleclick)

});
let arr = Array(9).fill(null)
const players = ["x", "o"];
let currentplayer = "o";
function checkwin() {
    if (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2] ||
        arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5] ||
        arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8] ||
        arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6] ||
        arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] ||
        arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] ||
        arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ||
        arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]
    ) {

        document.write(`winner is ${currentplayer}`)
    }
    else if (!arr.some(e => e === null)) {
        document.write(`DRAW!!!`)
    }


}



function handleclick(e) {
    if (e.target.innerText === "") {
        let id = e.target.id
        arr[id] = currentplayer;
        e.target.innerText = currentplayer;


        checkwin();

        currentplayer = (currentplayer === "x") ? "o" : "x";

    }


}