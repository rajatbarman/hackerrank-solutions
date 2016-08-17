
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var [n,k] = readLine().split(' ').map(Number);
        console.log(answer(n,k));
    }

}

function answer(n,k) {
    var perm = [], hash={};
    for(var i=1; i<=n;i++) {
        if(i>k && !hash[i-k]) {
            perm.push(i-k);
            hash[i-k] = true;
        }
        else if((i+k) <= n) {
            perm.push(i+k);
            hash[i+k]=true;
        }
    }
    if(perm.length!=n) {
        return -1;
    }
    else {
        return perm.join(" ");
    }
}
