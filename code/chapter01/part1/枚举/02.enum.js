var ResponseState;
(function (ResponseState) {
    ResponseState[ResponseState["No"] = 0] = "No";
    ResponseState[ResponseState["Yes"] = 1] = "Yes";
})(ResponseState || (ResponseState = {}));
function respond(recipient, message) {
    console.log(recipient, message, ResponseState);
}
respond('Princess Caroline', ResponseState.Yes);
//  enum Direction01{
//    Up = "Up",
//    Down,
//    Left,
//    Right
//  }
var Direction01;
(function (Direction01) {
    Direction01["Up"] = "Up";
    Direction01["Down"] = "Down";
    Direction01["Left"] = "Left";
    Direction01["Right"] = "Right";
})(Direction01 || (Direction01 = {}));
console.log(Direction01);
// console.log(Directions02);
var up = 0 /* Up */;
console.log(up);
