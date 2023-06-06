let balance= 1500;
let alertWarning=" warning negative balance!";


function balanceFunction(){
    var id=document.getElementById("text").innerHTML="your balance in dollars is "+balance

}
function deposit_10(){
    balance=balance+10;
}
function deposit_20(){
    balance=balance+20;
}
function deposit_50(){
    balance=balance+50;
}
function deposit_100(){
    balance=balance+100;
}
// Now lets cover withdrawal//
function withdrawal_10(){
    balance=balance-10;
}
function withdrawal_20(){
    balance=balance-20;
}
function withdrawal_50(){
    balance=balance-50;
}
function withdrawal_100(){
    balance=balance-100;    
    
}