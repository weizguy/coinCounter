/**
 * Created by Weizguy on 2/1/2017.
 */


function calculate(){
    var n = document.getElementById("input").value;
    var coin1 = document.getElementById("coin1").value;
    var coin2 = document.getElementById("coin2").value;
    var coin3 = document.getElementById("coin3").value;
    var coin4 = document.getElementById("coin4").value;
    document.getElementById("count1").style.visibility = "hidden";
    document.getElementById("count2").style.visibility = "hidden";
    document.getElementById("count3").style.visibility = "hidden";
    document.getElementById("count4").style.visibility = "hidden";
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0;
    coins=[];
    while(n!=0){
        if (n>=coin1){
            coins.push(coin1);
            count1 += 1;
            document.getElementById("count1").style.visibility = "visible";
            n = n - coin1;
        }
        else if (n>=coin2){
            coins.push(coin2);
            count2 += 1;
            document.getElementById("count2").style.visibility = "visible";
            n = n - coin2;
        }
        else if (n>=coin3){
            coins.push(coin3);
            count3 += 1;
            document.getElementById("count3").style.visibility = "visible";
            n = n - coin3;
        }
        else if (n>=coin4){
            coins.push(coin4);
            count4 += 1;
            document.getElementById("count4").style.visibility = "visible";
            n = n - coin4;
        }
        document.getElementById("count1").value = count1;
        document.getElementById("count2").value = count2;
        document.getElementById("count3").value = count3;
        document.getElementById("count4").value = count4;
    }
    console.log(coins);
}