function processData(input) {
    var lines = input.split("\n");
    var t = +lines[0];
    for(var i=1;i<=t; i++) {
        warn(lines[i]);
    }
} 
function warn(inp) {
    var [P,S,Start] = inp.split(" ").map(Number);
    var lastPersonId = (((S-1) + Start) % P) || P;
    console.log(lastPersonId)
}