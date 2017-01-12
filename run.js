function move() {
    // blank the up(concealed) card holder
    var u_id = 'u-'.concat(ur[uc-1],'-',uc);
    ur[uc-1] = ur[uc-1] - 1;
    document.getElementById(u_id).src = "images/blank.png";

    // what is the current card
    curr = queue[curr_indx];
    curr_indx = curr_indx + 1;
    dc = curr.split('_')[0];

    // set the down(revealed) card holder
    var d_id = 'd-'.concat(dr[dc-1],'-',dc);
    dr[dc-1] = dr[dc-1] + 1;
    var img = 'images/'.concat(curr, '.png');
    document.getElementById(d_id).src = img;

    if (dr[dc-1] > 4) {
        var l_id = 'l-'.concat(dc);
        document.getElementById(l_id).src = "images/lights_on.png";
    }

    uc = dc;
    if (ur[uc-1] < 1) {
        alert("游戏结束");
    }
    var u_id1 = 'u-'.concat(ur[uc-1],'-',uc);
    document.getElementById(u_id1).src = "images/back_high.png";
}

/*
     https://bost.ocks.org/mike/shuffle/
     Amazing representation of the shuffling algorithm used, by Mike Bostock

     Codes from:
     https://github.com/Daplie/knuth-shuffle
*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function randomize() {
    orig_queue = ["1_h","1_s","1_d","1_c","2_h","2_s","2_d","2_c",
        "3_h","3_s","3_d","3_c","4_h","4_s","4_d","4_c",
        "5_h","5_s","5_d","5_c","6_h","6_s","6_d","6_c",
        "7_h","7_s","7_d","7_c","8_h","8_s","8_d","8_c",
        "9_h","9_s","9_d","9_c","10_h","10_s","10_d","10_c",
        "11_h","11_s","11_d","11_c","12_h","12_s","12_d","12_c"];

    if (document.getElementById("lucky").checked == false) {
        queue = shuffle(orig_queue);
    } else {
        console.log("Lucky it is.");
        queue = shuffle(orig_queue.slice(1, orig_queue.length));
        queue.push("1_h");
    }
}
