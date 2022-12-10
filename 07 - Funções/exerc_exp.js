let x = 0;

function maior (num){
    if (num > x) {
        x = num;
        return x;       
    } else {
        x = x;
        return x;
    }
}

module.exports = { maior };