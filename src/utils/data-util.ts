//抽离获取数据的方法
//返回一个可以获取到最终的数据的Promise
//那么，如何告诉Promise我们最终数据的类型呢？
//在调用该方法的时候将目标类型传入即可：<T>
//现在，该函数实现的功能就是在调用该函数时传入指定的类型，那么返回的Promise的等待结果
//就是传入的数据类型：const users=getData<Array<User>>("https:/xxxx") 
//users : Array<User>
export const getData=async <T>(url:string):Promise<T>=>{
    const response=await fetch(url);
    return await response.json()
}


