function processData(input) {
    var lines = input.split("\n");
    var [n,k] = lines[0].split(" ");
    var arr = lines[1].split(" ").map(Number);
       var hash = {}, answer = 0;
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i] % k;
        if(typeof hash[arr[i]] === 'undefined') {
            hash[arr[i]] = 0;
        }
        ++hash[arr[i]];
    }
    for(var i=0; i<=Math.floor(k/2); i++) {
        if(i===0 && hash[0] >= 1) {
            answer += 1;
            continue;
        }
        if(i==k-i) {
            answer += 1;
            continue;
        }

        if(hash[i] >= hash[k-i]) {
            answer += hash[i];
        }
        else if(hash[i] < hash[k-i]) {
            answer += hash[k-i];
        }
        else if(hash[k-i]) {
            answer += hash[k-i];
        }
        else if(hash[i]) {
            answer += hash[i];   
        }

    }
    console.log(answer);
} 