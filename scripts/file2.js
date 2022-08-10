
var positive = [];

//loop to check number > 0 and no decimal point and number < 0 and no decimal point
function readInput() {
    loop:for (;;) {
        let message = prompt('Enter an integer (a negative integer to quit):');
        var number = Number(message);
        if (number>=0 && !(number % 1 != 0) ) {
            positive.push(number);
            continue loop;
        } else if (number<0 && !(number % 1 != 0) ) {
            break loop;
        }
    } 
}

//function average,minimum,maximum
function average() {
    const avg = positive.reduce((a, b) => a + b, 0) / positive.length;
    return avg;
}

function minimum() {
    const min = Math.min.apply(Math,positive);
    return min;
}

function maximum() {
    const max = Math.max.apply(Math,positive);
    return max;
}

function displayStats(list) {
    average(list);
    minimum(list);
    maximum(list);
    (positive.length > 0)? 
    alert('For the list '+ positive + ' the average is ' + average(list).toFixed(2) + ' the minimum is ' + minimum(list) + ' and the maximum is ' + maximum(list)):
    alert('For the list is empty,'+ ' the average is 0' + ' the minimum is 0' + ' and the maximum is 0');
    // if (positive.length > 0) {
    //     alert('For the list '+ positive + ' the average is ' + average(list).toFixed(2) + ' the minimum is ' + minimum(list) + ' and the maximum is ' + maximum(list) )
    // } else {
    //     alert('For the list is empty,'+ ' the average is 0' + ' the minimum is 0' + ' and the maximum is 0')
    // }
}

list = readInput();
displayStats(list);