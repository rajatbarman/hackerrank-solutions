
function main() {
    var t = parseInt(readLine());
    console.log(answer(t));
}
function answer(G) {
    var a = 3, sum = 3;
    while(sum < G) {
        a = a*2;
        sum=sum+a;
    }
    return (sum - G) + 1;
}
