function main() {
    var [n,k] = readLine().split(' ').map(Number);
    c = readLine().split(' ').map(Number);
    var E = 100;
    var i=0;
    while(i<n) {
        if(c[i]) {
            E-=2;
        }
        E--;
        i+=k;   
    }
    console.log(E);
    
}
