function processData(input) {
    var lines = input.split("\n");
    var [n,k] = lines[0].split(" ");
    var G = lines[1].split(" ").map(Number);
    var cur_page = 0, special_questions = 0;
    for(var i=0; i<G.length; i++) {
        cur_page++;
        for(var j=1; j<=G[i]; j++) {
            if(j==cur_page) {
                special_questions++;
            }
            if(j%k === 0 && j!=G[i]) {
                cur_page++;
            }
        }
    }
    console.log(special_questions);
