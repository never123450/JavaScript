// 组合全选认证 举个虚拟dom的例子
// 一个虚拟dom 有可能很多属性是动态的 , 每一个状态标记一个2进制位

let STYLE = 1
let CLASS = 1<<1
let CHILDREN = 1<<2


// 授权 |
let vnodeType = STYLE | CLASS

// 判断 &
console.log('vnodeType的类型 STYLE',vnodeType & STYLE)
console.log('vnodeType的类型 CLASS',vnodeType & CLASS)
console.log('vnodeType的类型 CHILDREN',vnodeType & CHILDREN)
