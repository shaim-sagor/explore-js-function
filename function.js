//single peramiter 

function purchaseApple(taka) {
    console.log('total money given ', taka);
    var applePrice = 30;
    var appleQuantity = taka / applePrice;
    return appleQuantity;
}


var money = 300;
var apple = purchaseApple(money);
console.log('your total apple ', apple);


//multiple perameter

function numberRelation(num1, num2, num3) {
    console.log('Number One is ', num1);
    console.log('Number Two is ', num2);
    console.log('Number Three is ', num3);

    var total = num1 + num2 + num3;
    console.log('All Numbers total ', total);
    var multiple = num1 * num2 * num3;
    console.log('all numbers multiple ', multiple);
    var minus = num3 - num2;
    console.log('difference is ', minus);
    var divide = num3 / num1;
    console.log('divided result is ', divide);

}

var numOne = 2;
var numTwo = 3;
var numThree = 4;
var giverNums = numberRelation(numOne, numTwo, numThree);
console.log(giverNums);




