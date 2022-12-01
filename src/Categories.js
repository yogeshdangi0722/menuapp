import React from 'react';

const Categories = ({categories,fileterItem}) => {
  return (
    <div className='btn-container'>
    {categories.map((item,index)=>{
      return (

        <button className='filter-btn' key={index} onClick={()=>{fileterItem(item)}}>{item}</button>
      )
    })}
    </div>
  )
};

export default Categories;
  