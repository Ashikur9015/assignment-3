
// convert  kilomiter to miter [js (i)]
 function kilomiterTomiters(meter) {
    var kiloMiter = meter * 1000;
    return kiloMiter;
    }
var totalMiter = kilomiterTomiters(1);
console.log(totalMiter);



//  Budget Calculato to [js (ii)]
function budgetCalculator(watch, mobile, laptop) {
    laptop = laptop * 300;
    watch = watch * 75;
    mobile = mobile * 100;
     
    var total = watch + mobile + laptop;
    return total;
}
var totalBudget = budgetCalculator(1, 2, 3);
console.log(totalBudget);


// total cost hotel to [js (iii)]
function totalCost(perDay) {
    var dailyCost = 0;

    if (perDay <= 16) {
        dailyCost = perDay * 60;
    } else if (perDay <= 20) {
        var firstOne = 10 * 60;
        var remaining = perDay - 10;
        var secondPert = again * 600;
        dailyCost = firstOne + secondPert;
    } else {
        var firstOne = 10 * 600;
        var remaining = perDay - 10
        var secondPert = remaining * 50;
        dailyCost = firstOne + secondPert;
    }

    return dailyCost;
}

var totalCost = totalCost(50);
console.log(totalCost);



// Friend  list to [js (iv)]

var myFriendList = ['Silva',  'Ashik', 'Tanvir', 'Jonayed', ];
var frinds = "  ";

function megaFriend(frinds) {
    for (var i = 0; i < myFriendList.length; i++) {

        if (myFriendList[i].length > frinds.length) {
            frinds = myFriendList[i];
        }
    }
    return frinds;
}
var myFriendList = megaFriend(myFriendList);
console.log(myFriendList);
