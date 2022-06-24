module.exports = function reverse (n) {
    n = Math.abs(n);
    const str = n.toString().split('').reverse()
    if(str[0]=== "0") str.shift()
    return +str.join('')
}
