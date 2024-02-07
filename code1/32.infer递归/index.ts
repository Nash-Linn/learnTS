{
  // 实现类型  type Arr = [1,2,3,4]  ==》 type Arrb = [4,3,2,1]

  type Arr = [1,2,3,4]

  type RevertArr<T extends any[]>= T extends [infer first,...infer rest] ? [...RevertArr<rest>,first]:T

  type Arrb =RevertArr<Arr>
}