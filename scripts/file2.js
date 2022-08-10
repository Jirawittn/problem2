
var list = [];

//loop to check number > 0 and no decimal point and number < 0 and no decimal point
function readInput() {
    loop:for (;;) {
        let message = prompt('Enter an integer (a negative integer to quit):');
        var number = Number(message);
        if (number>=0 && !(number % 1 != 0) ) {
            list.push(number);
            continue loop;
        } else if (number<0 && !(number % 1 != 0) ) {
            break loop;
        }
    } return list;
}

//function average,minimum,maximum
function average() {
    const avg = list.reduce((a, b) => a + b, 0) / list.length;
    return avg;
}

function minimum() {
    const min = Math.min.apply(Math,list);
    return min;
}

function maximum() {
    const max = Math.max.apply(Math,list);
    return max;
}

function displayStats(list) {
    (list.length > 0)? 
    alert('For the list '+ list + ' the average is ' + average(list).toFixed(2) + ' the minimum is ' + minimum(list) + ' and the maximum is ' + maximum(list)):
    alert('For the list is empty,'+ ' the average is 0' + ' the minimum is 0' + ' and the maximum is 0');
    // if (positive.length > 0) {
    //     alert('For the list '+ positive + ' the average is ' + average(list).toFixed(2) + ' the minimum is ' + minimum(list) + ' and the maximum is ' + maximum(list) )
    // } else {
    //     alert('For the list is empty,'+ ' the average is 0' + ' the minimum is 0' + ' and the maximum is 0')
    // }
}

list = readInput();
displayStats(list);