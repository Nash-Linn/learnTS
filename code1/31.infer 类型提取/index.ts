// 提取头部元素

type Arr = ['a','b','c']

type First<T extends any[]> = T extends [infer one , ...any[]] ? one : never

type ArrFirst = First<Arr> 

// 提取尾部元素

type Last<T extends any[]> = T extends [...any[],infer one] ? one : never 
type ArrLast = Last<Arr>


//  剔除头部元素
type Shift<T extends any[]> = T extends [infer one , ...infer rest] ? rest : never
type ArrShift = Shift<Arr>


//  剔除尾部元素

type Pop<T extends any[]> = T extends [...infer Rest , infer other] ? Rest : never
type ArrPop = Pop<Arr>