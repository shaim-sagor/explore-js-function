// var i = 0;
// while (i < 20) {
//     console.log(i);
//     if (i == 11) {
//         break
//     }
//     i++;

// };


// for (var i = 0; i < 11; i++) {
//     console.log(i);
//     if (i == 6) {
//         break;
//     }
// };


// var numbers = [14, 24, 35, 42, 57, 78, 73, 82, 93, 103, 118, 12];

// for (var num = 0; num < numbers.length; num++) {
//     var number = numbers[num];
//     console.log(number);
//     if (number > 100) {
//         break;
//     }
// }

// continue 

// var numbers = [14, 24, 95, 42, 57, 88, 73, 82, 93, 103, 18, 12];

// for (var num = 0; num < numbers.length; num++) {
//     var number = numbers[num];

//     if (number > 80) {
//         continue;
//     }
//     console.log(number);
// };


var mobile = ['xiomi', 'walton', 'smasung', 'realme', 'oneplus', 'sprint'];
mobile[3] = 'oppo';
console.log(mobile);

//check one element exist or not

if (mobile.indexOf('vivo') == -1) {
    console.log('Opps its not avaiable');
};


//if its avaiable

if (mobile.indexOf('walton') != -1) {
    console.log('its avaiable')
};
