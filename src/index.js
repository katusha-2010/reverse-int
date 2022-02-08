module.exports = function reverse (n) {
    let n1 = Math.abs(n)
    let arr = Array.from(n1.toString()).map(n1 => +n1)
    return +arr.reverse().join('')
}
