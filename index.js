const newNames = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newNames;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    } 
}