import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './utils/data-util';
import { DropResult } from 'react-beautiful-dnd';
export type Monster={
  id:string;
  name:string;
  email:string;
}
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const getTempData=async()=>{
      const monsters=await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
    }
    getTempData()
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const sortMonster=(sortParams:DropResult)=>{
    const {source,destination}= sortParams
    if(destination){
      const {index:sourceIndex} = source 
      const {index:targetIndex} = destination
      console.log('ge:',sourceIndex,targetIndex)
      setFilterMonsters(pre=>{
        const tempData=[...pre]
        tempData.splice(targetIndex,-1,tempData.splice(sourceIndex,1)[0])
        return tempData
      })
    }
  }
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} sortMonster={sortMonster}/>
    </div>
  );
};

export default App;
