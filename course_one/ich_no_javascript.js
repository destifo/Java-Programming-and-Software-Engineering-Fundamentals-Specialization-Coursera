var x = 3;
console.log(x);
function square(num){
    return x * x;
}

console.log(square(x));
function phrase3words(word1, word2, word3){
    return word1 + ' ' + word2 + ' ' + word3
}
console.log(phrase3words('hello', 'duke', 'university'))

function reformatName(fname, lname){
    formattedName = lname + ', ' + fname;
    return formattedName;
}

console.log(reformatName('Susan', 'Rodgers'))