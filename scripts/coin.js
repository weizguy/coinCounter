/**
 * Created by Weizguy on 2/1/2017.
 */


function calculate(){
    var n = document.getElementById("input").value;
    var coin1 = document.getElementById("coin1").value;
    var coin2 = document.getElementById("coin2").value;
    var coin3 = document.getElementById("coin3").value;
    var coin4 = document.getElementById("coin4").value;
    coins=[];
    while(n!=0){
        if (n>=coin1){
            coins.push(coin1);
            n = n-coin1;
        }
        else if (n>=coin2){
            coins.push(coin2);
            n = n-coin2;
        }
        else if (n>=coin3){
            coins.push(coin3);
            n = n -coin3;
        }
        else if (n>=coin4){
            coins.push(coin4);
            n = n - coin4;
        }
    }
    console.log(coins);
}