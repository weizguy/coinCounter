/**
 * Created by Weizguy on 2/1/2017.
 */


function calculate() {
    /*
    The function basically grabs the number from the input box
    determines which coins are needed and counts how many of
    each are needed, then displays them in the counters
     */
    var n = Number(document.getElementById("input").value);
    // get the initial value for the coins
    var coin1 = document.getElementById("coin1").value;
    var coin2 = document.getElementById("coin2").value;
    var coin3 = document.getElementById("coin3").value;
    var coin4 = document.getElementById("coin4").value;
    // convert the text to numbers
    var coins = [Number(coin1), Number(coin2), Number(coin3), Number(coin4)];
    // sort the coins (in case of changing out of order)
    coins.sort(function (a, b) {
        return a - b
    });
    // apply the values to the DOM
    document.getElementById("coin1").value = coins[3];
    document.getElementById("coin2").value = coins[2];
    document.getElementById("coin3").value = coins[1];
    document.getElementById("coin4").value = coins[0];
    // again, convert the text to numbers for comparison
    coin1 = Number(document.getElementById("coin1").value);
    coin2 = Number(document.getElementById("coin2").value);
    coin3 = Number(document.getElementById("coin3").value);
    coin4 = Number(document.getElementById("coin4").value);
    // hide the counters
    document.getElementById("count1").style.visibility = "hidden";
    document.getElementById("count2").style.visibility = "hidden";
    document.getElementById("count3").style.visibility = "hidden";
    document.getElementById("count4").style.visibility = "hidden";
    // set the counters to 0
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0;
    // perform the loop to count how many of each coin is needed
    while (n != 0) {
        if (n >= coin1) {
            count1 += 1;
            document.getElementById("count1").style.visibility = "visible";
            n = n - coin1;
        }
        else if (n >= coin2) {
            count2 += 1;
            document.getElementById("count2").style.visibility = "visible";
            n = n - coin2;
        }
        else if (n >= coin3) {
            count3 += 1;
            document.getElementById("count3").style.visibility = "visible";
            n = n - coin3;
        }
        else if (n >= coin4) {
            count4 += 1;
            document.getElementById("count4").style.visibility = "visible";
            n = n - coin4;
        }
        // display the counts to the counters
        document.getElementById("count1").value = count1;
        document.getElementById("count2").value = count2;
        document.getElementById("count3").value = count3;
        document.getElementById("count4").value = count4;
    }
}