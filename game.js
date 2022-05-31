var game = {
    TCA: new Array(8)
}

function react(initialAmount, finalAmount, coefficient) {
    if(initialAmount + finalAmount == 0) return 0;
    return coefficient * initialAmount * initialAmount / (initialAmount + finalAmount);
}

function frame() {
    let temp = 0;
    let j = 0;
    for(let i = 0; i < 8; i++) {
        if(i < 7) 
            j = i+1;
        else
            j = 0;
        temp = react(game.TCA[i], game.TCA[j], 1/100);
        game.TCA[i] -= temp;
        game.TCA[j] += temp;
        document.getElementById("TCA" + i + "amount").innerHTML = game.TCA[i];
    }
}


function run() {
    game.TCA[0] = 1;
    for(let i = 1; i < 8; i++) {
        game.TCA[i] = 0;
    }
    setInterval(function() {
        frame();
    }, 10)
}
