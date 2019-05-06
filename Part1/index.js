let progress = []

function play(clickedId) {
    let currentPlayer = document.getElementById('player')
    let clicked = document.getElementById(clickedId)
    if (currentPlayer.innerText === 'X') {
        currentPlayer.innerText = 'O'
        clicked.innerText = 'X'
        progress[clickedId] = 'X'
    } else {
        currentPlayer.innerText = 'X'
        clicked.innerText = 'O'
        progress[clickedId] = 'O'
    }
    let topLeft = progress[0]
    let topCenter = progress[1]
    let topRight = progress[2]
    let middleLeft = progress[3];
    let middleCenter = progress[4];
    let middleRight = progress[5];
    let bottomLeft = progress[6];
    let bottomCenter = progress[7];
    let bottomRight = progress[8];



    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    let boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (progress[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
}




