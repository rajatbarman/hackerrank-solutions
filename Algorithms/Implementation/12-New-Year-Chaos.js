function main() {
    var T = parseInt(readLine());
    for(var a0 = 0; a0 < T; a0++){
        var n = parseInt(readLine());
        q = readLine().split(' ');
        q = q.map(Number);
        console.log(answer(q));
    }

}
function answer(arr) {
    var bribes = 0;
        for(var i=1; i<=arr.length; i++) {
            let displacement = arr[i-1] - i;
            if(displacement > 2) {
                return "Too chaotic";
            }
            if(displacement > 0) {
               continue;
            }
            for(var j=i-2; j>=(i-(Math.abs(displacement) + 2)); j--) {
                if(arr[i-1] < arr[j]) {
                    bribes++;
                }
            }
        }
    return bribes;
}
