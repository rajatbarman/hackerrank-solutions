function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        a = readLine();
        var studentsPresent = 0;
        a = a.split(" ").map(Number).map(function(ele) {if(ele<=0) studentsPresent++;});
        (studentsPresent >= k) ? console.log("NO") : console.log("YES"); 
    }

}
