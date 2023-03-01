import { Dictionaries } from "../enum"
export type Key = string
export type Expire = Dictionaries.permanent | number //永久Dictionaries.permanent  | 时间戳

export interface Result<T>{
  message:string
  value:T | null
}

export interface Data<T>{
  value:T,
  [Dictionaries.expire]:Expire
}

export interface StorageCls{
  get:<T>(key:Key)=>Result<T|null>
  set:<T>(key:Key,value:T,expire:Expire)=>void
  remove:(key:Key)=>void
  clear:()=>void
}