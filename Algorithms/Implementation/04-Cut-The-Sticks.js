function main() {
    var n = parseInt(readLine());
    var arr = readLine().split(' ').map(Number);
    
    while(arr.length != 0) {
       console.log(arr.length);
       var min = Math.min.apply(Math, arr);
       for(let i=0; i<arr.length; i++) {
           arr[i] = arr[i] - min;
           if(arr[i] <= 0) {
           		arr.splice(i, 1);
           		i--;
           }
       }
    }
    
}
