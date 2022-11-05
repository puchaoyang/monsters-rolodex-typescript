// import React, {FC, forwardRef, MouseEventHandler, useEffect, useImperativeHandle, useState} from "react";
// type MyComProps={
//     age:number,
//     name:string,
// }
//
// const MyCom:FC<MyComProps>=(props,ref)=>{
//     //数据更新驱动类
//     const [num,setNum]=useState<number>(0);
//     const [active,setActive]=useState<boolean>(false)
//     // const [isPending,startTransition]=useTransition()
//     const handleClick:MouseEventHandler<HTMLDivElement>=(
//         e):void=>{
//         setNum(num=>num+1)
//         // startTransition(()=>{
//         //     setActive(active=>!active)
//         // })
//     }
//     //状态获取与传值
//     //执行副作用
//     useEffect(()=>{
//         //发送请求： fetch("xxxxx//:xxxxx").then()xxxx;
//         //开启定时器：setInterval(()=>{},1000);
//         //改变DOM：document.xxx
//         //事件监听绑定：xxxxx.addEventListener
//     },[])
//     useImperativeHandle()
//
//     //状态派生与保存
//     //工具类型
//
//     return (
//         <div onClick={handleClick}>
//         123{`>`}{`》`}{num} ---{'>'}
//             {
//                 active?"ACTIVE":"NOT ACTIVE"
//             }
//         </div>
//     )
// }
// const ForSom=forwardRef<object,MyComProps>(MyCom)
// export default ForSom