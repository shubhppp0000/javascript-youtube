let str = "helloworld";
console.log(typeof str);
console.log(typeof(str));
let num = Number(str);
console.log(typeof (num));
console.log(num); //Nan (Not a Number)
let na = null;
let b = Number(na);
console.log(typeof b);
console.log(b);
let nt = undefined;
let bt = Number(nt);
console.log(typeof bt);
console.log(bt)