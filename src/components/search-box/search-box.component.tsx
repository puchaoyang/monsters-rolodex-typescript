import {ChangeEvent, ChangeEventHandler, EventHandler} from "react";

import './search-box.styles.css';
//注解对象的一种方式：接口
//接口可以重载（重新定义一个新的同名接口）
//接口可以继承（extends关键字组合多个接口）
interface ISearchBoxProps {
    className: string;
    placeholder?: string | undefined,
    onChangeHandler: (event: any) => any
}
//第二种方式：类型定义
//shi使用类型定义可以实现两种不同类型的联合，例如
//type A = {name ： string} type B= {age:number}
// type C=A | B  ==>C既可以为 A，也可以为 B
//亦即C要么满足A，要么满足B

//函数编程式风格 ---->使用type
//面向对象风格 ---->使用interface
type SearchProps={
    className: string;
    placeholder?: string | undefined,
    // onChangeHandler: (event: string) => void
    //它是一个函数，函数的传参由泛型决定,这里我们使用React默认的HTMLInputElement的事件处理程序
    onChangeHandler:ChangeEventHandler<HTMLInputElement>  
    //如果我们需要使用自己的事件处理程序，那么
    onChangeHandler1?:(even:ChangeEvent<HTMLInputElement>)=>void
}


const SearchBox = ({className, placeholder, onChangeHandler}: SearchProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
