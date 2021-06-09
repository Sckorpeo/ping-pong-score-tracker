const p1Text = document.querySelector('.p1-points');
const p2Text = document.querySelector('.p2-points');
let p1Points = 0;
let p2Points = 0;
let scoreCount = 5;
const p1Btn = document.querySelector('.p1-plus1');
const p2Btn = document.querySelector('.p2-plus1');
const rBtn = document.querySelector('.reset');
const score = document.querySelector('select');
let gameOver = false;

console.log(p1Text.innerHTML, p2Text.innerHTML);

const checkDone = () => {
    if (p1Points === scoreCount || p2Points === scoreCount) {
        gameOver = true;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.classList.toggle('active')
        p1Btn.classList.toggle('disabled')
        p2Btn.classList.toggle('active')
        p2Btn.classList.toggle('disabled')
        if (p1Points === scoreCount) {
            p1Text.classList.toggle('winner')
            p2Text.classList.toggle('loser')
        } else {
            p2Text.classList.toggle('winner')
            p1Text.classList.toggle('loser')
        }

    }
}

const addOne = (player) => {

    return player += 1;
}

const reset = () => {
    if (gameOver === false) {
        p1Points = 0
        p2Points = 0
        p1Text.innerText = 0
        p2Text.innerText = 0
        console.log('Game reset.')
    } else {
        if (p1Points === scoreCount) {
            p1Text.classList.toggle('winner')
            p2Text.classList.toggle('loser')
        } else {
            p2Text.classList.toggle('winner')
            p1Text.classList.toggle('loser')
        }
        gameOver = false;
        p1Btn.disabled = false;
        p2Btn.disabled = false;
        p1Btn.classList.toggle('active')
        p1Btn.classList.toggle('disabled')
        p2Btn.classList.toggle('active')
        p2Btn.classList.toggle('disabled')

        p1Points = 0
        p2Points = 0
        p1Text.innerText = 0
        p2Text.innerText = 0
        console.log('Game reset.')
    }

};

p1Btn.addEventListener('click', () => {
    p1Points = addOne(p1Points);
    console.log(`PLayer 1 has: ${p1Points}`)
    p1Text.innerText = p1Points;
    checkDone(p1Btn);
});

p2Btn.addEventListener('click', () => {
    p2Points = addOne(p2Points);
    console.log(`Player 2 has: ${p2Points}`)
    p2Text.innerText = p2Points;
    checkDone(p2Btn);
});

rBtn.addEventListener('click', reset);

score.addEventListener('input', () => {
    scoreCount = parseInt(score.value);
    console.log(`Score to win is ${scoreCount}`)
});


