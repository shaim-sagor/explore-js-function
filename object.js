var mobile = {
    model: 'redmi 9',
    camera: '120px',
    memory: '60gb',
    colour: 'blue',
    ram: '6gb',
    processor: 'heilo 920',


}

//showing or get object value

console.log(mobile.colour);
var mobileCamera = mobile.camera;
console.log(mobileCamera);

//set a object value

var ramAdd = 'ram';
mobile[ramAdd] = '43gb';
// mobile['ram'] = '18gb';
// mobile.ram = '12gb';
console.log(mobile.ram);