function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var i=0, jumps = 0;
    while(i < c.length-1) {
        if(c[i+2]) {
          i++  
        }
        else {
            i+=2;
        }
        jumps++;
    }
    console.log(jumps)
}
