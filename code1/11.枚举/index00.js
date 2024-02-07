"use strict";
(() => {
    // 枚举类型
    /*
      
    */
    // const fn = (type:string)=>{
    //   if(type == 'red'){
    //     return 0
    //   }
    //   if(type == 'green'){
    //     return 1
    //   }  
    //   if(type == 'blue'){
    //     return 2
    //   }
    // }
    // enum Color {
    //   red,
    //   green,
    //   blue
    // }
    //增长枚举-----------------------------------
    // enum Color {
    //   red = 1,
    //   green,
    //   blue
    // }
    // enum Color {
    //   red = 1,
    //   green=5,
    //   blue=7
    // }
    //字符串枚举-----------------------------------
    let Color;
    (function (Color) {
        Color["red"] = "red";
        Color["green"] = "green";
        Color["blue"] = "blue";
    })(Color || (Color = {}));
    //异构枚举-----------------------------------
    let YiGou;
    (function (YiGou) {
        YiGou["No"] = "No";
        YiGou[YiGou["Yes"] = 1] = "Yes";
    })(YiGou || (YiGou = {}));
    let obj = {
        red: Color.red
    };
    let code = 0;
    if (code === 0 /* Types.success */) {
    }
    let Status;
    (function (Status) {
        Status[Status["success"] = 0] = "success";
    })(Status || (Status = {}));
    let success = Status.success;
    console.log('success', success);
})();
