 enum ResponseState{
   No = 0,
   Yes = 1
 }

 function respond(recipient:string, message: ResponseState){
  console.log(recipient,message,ResponseState);
 }

 respond('Princess Caroline',ResponseState.Yes)   


//  enum Direction01{
//    Up = "Up",
//    Down,
//    Left,
//    Right
//  }

enum Direction01{
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}
console.log(Direction01);


const enum Directions02 {
  Up,
  Down,
  Left,
  Right
}
// console.log(Directions02);
let up = Directions02.Up;
console.log(up);


declare enum Enum01{
  A = 1,
  B,
  C = 2
}

let e1 = Enum01