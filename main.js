var removeM = function (str) {

    var output = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] != 'm') {
            output += str[i];
        }
    }
    return output;
};
