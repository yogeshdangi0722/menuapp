import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategory = ['all',...new Set(items.map((item)=>item.category))]
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setcategories]=useState(allCategory);


  const fileterItem = (filter)=>{
    if(filter==='all'){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item)=>{return item.category==filter})
    setMenuItems(newItem);
  }

  return (
   <main>
      <section className='menu section'>
          <div className='title'>
            <h2>Our Menu</h2>
            <div  className='underline'></div>
          </div>
          <Categories categories={categories} fileterItem={fileterItem} />
          <Menu menuItems={menuItems} />
      </section>
   </main>
  )
}

export default App;
   