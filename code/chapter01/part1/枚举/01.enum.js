var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log('Direction -->', Direction);
console.log('Direction[1] -->', Direction[1]);
console.log('Direction[2]-->', Direction[2]);
console.log('Direction[3] -->', Direction[3]);
console.log('Direction[4] -->', Direction[4]);
console.log('Direction["Up"] -->', Direction["Up"]);
console.log('Direction["Down"] -->', Direction["Down"]);
console.log('Direction["Left"] -->', Direction["Left"]);
console.log('Direction["Right"] -->', Direction["Right"]);
