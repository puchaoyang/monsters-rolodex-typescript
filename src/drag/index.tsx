import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {Input, Select} from 'antd'
import 'antd/dist/antd.min.css'
import { useEffect, useState } from "react";
const data1=[
  {
    id:1,
    name:'张三'
  },
  {
    id:12,
    name:'李四'
  },
  {
    id:123,
    name:'王五'
  },{
    id:1234,
    name:'赵六'
  },{
    id:12345,
    name:'顶顶顶'
  }
]
export default () => {
  const [data,setData] = useState<any>()
  useEffect(()=>{
    setData(data1)
  },[data1])
  const dragEnd = (end: any) => {
    const {source,destination} = end
    console.log("end", end);
    setData((preData:any)=>{
      if(!destination||source.index === destination.index){
        return preData
      }
      const cloneData = [...preData]
      console.log('cloneDatapre',cloneData)
      //先删除原来的元素，根据返回值插入到目标元素的前面
      cloneData.splice(destination.index,-1,cloneData.splice(source.index,1)[0])
      console.log('cloneDataAfter',cloneData)
      return cloneData
    })
  };
  const [value,setValue] = useState('')
  const handleChange = (e:any)=>{
    setValue(e.target.value.toUpperCase())
  }
  return (
    <DragDropContext onDragEnd={dragEnd}>
      {/* <input onChange={handleChange} value={value}/> */}
      <Droppable droppableId="6">
        {(provided, snapshot) => {
          return (
            <ul
              ref={provided.innerRef}
              className="app"
              {...provided.droppableProps}
            >
              {
                (data||[]).map((d:any,index:any)=>{
                  return (
                    <Draggable draggableId={d.id+''} index={index} key={d.id}>
                      {(provided, snapshot) => (
                        <li
                          className="child"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          {d.name}
                        </li>
                      )}
                    </Draggable>
                  )
                })
              }
              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
