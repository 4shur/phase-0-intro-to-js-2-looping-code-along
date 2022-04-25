// Code your solutions in this file
const cards = []

function writeCards(names,event) {
    for (let i = 0; i<names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return [...cards]
}

function countDown(x) {
    let countDown = x
    while (countDown >= 0){
        console.log(countDown--);
    }
}