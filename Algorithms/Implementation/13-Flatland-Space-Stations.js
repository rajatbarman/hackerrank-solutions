function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    console.log(answer(c,n));
    
}

function answer(arr, n) {
    if(n == arr.length) {
        return 0;
    }
    arr.sort(function(a,b) {
        return a-b;
    });
    var max = arr[0] - 0;
    for(var i=0; i<arr.length; i++) {
        let x = Math.floor((arr[i+1] - arr[i]) / 2);
        if(x > max) {
            max = x;
        }
    }
    if((n-1) - last(arr) > max) {
        max = (n-1) - last(arr);
    }
    return max;
}

function last(arr) {
    return arr[arr.length - 1];
}
