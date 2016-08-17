function main() {
    var X = {};
    var Y = {};
    var split = readLine().split(' ').map(Number);   
    X['start'] = split[0];
    X['speed'] = split[1];
    Y['start'] = split[2];
    Y['speed'] = split[3];
    if(X.speed == Y.speed) {
        console.log("NO");
        return;
    }
    if(X.speed < Y.speed && X.start <= Y.start) {
        console.log("NO");
        return;
    }
    if(Y.speed < X.speed && Y.start <= X.start) {
        console.log("NO");
        return;
    }
    if(X.start > Y.start) {
        while(X.start > Y.start) {
            Y.start += Y.speed;
            X.start += X.speed;
        }     
    }
    else {
        while(Y.start > X.start) {
            Y.start += Y.speed;
            X.start += X.speed;
        }
    }
     
    if(X.start == Y.start) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
    
}
