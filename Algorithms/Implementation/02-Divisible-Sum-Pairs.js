function main() {
    var [n,k] = readLine().split(' ');
    a = readLine().split(' ').map(Number);
    a.sort();
    var validPairsCount = 0;
    for(var i=0; i<a.length; i++) {
        for(var j=i+1; j<a.length; j++) {
            if(((a[i]+a[j]) % k) == 0) {
                validPairsCount++;
            }
        }
    }
    console.log(validPairsCount);
    
}
