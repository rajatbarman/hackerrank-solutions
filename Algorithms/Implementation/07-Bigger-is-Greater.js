function processData(input) {
    var lines = input.split("\n");
    var t = +lines[0];
    for(var i=1; i<=t; i++) {
        init(lines[i])
    }
} 

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}
function rearrange(str) {
    for(var i=str.length-2; i>=0; i--) {
        var greaterValuesIndex = [];
        for(var j=i+1; j<str.length; j++) {
            if(str[j] > str[i]) {
                greaterValuesIndex.push(j);
            }
        }
        if(greaterValuesIndex.length) {
            let temp = str[i];
            let indexOfMinimumCharcter = minChar(greaterValuesIndex, str);
            str = str.replaceAt(i, str[indexOfMinimumCharcter]);
            str = str.replaceAt(indexOfMinimumCharcter, temp);
            str = str.slice(0, i+1) + sortString(str.slice(i+1));
            break;
        }
    }
    return str;
}
function sortString(str) {
    return str.split("").sort().join("");
}
function minChar(indexes, str) {
    var min = "z", requiredIndex=indexes[0];
    for(var i=0; i<indexes.length; i++) {
        if(str[indexes[i]] < min) {
            min = str[indexes[i]];
            requiredIndex = indexes[i];
        }
    }
    return requiredIndex;
}
function init(str) {
    var modifiedStr = rearrange(str);
    if(modifiedStr == str) {
        console.log("no answer");
    }
    else {
        console.log(modifiedStr);        
    }
}