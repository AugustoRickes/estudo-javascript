filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        return Number(value);
    }
    return NaN;
}
//console.log(filterInt(405));
//console.log(filterInt(-405));
//console.log(filterInt("Augusto"));



//console.log(Math.cbrt(27));