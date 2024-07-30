module.exports = function reverse (n) {
    let result = "";

    n = Math.abs(n) + '';  

    for (let i= n.length - 1; i >= 0; i--) {
        result = result + n.slice(i, i + 1 );
    }

    return +result;
}
