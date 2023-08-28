import React from 'react'

const Categories = () => {
    const categories = ["all","cake", "vegitable", "fruit", "pizza", "burger"];
    const onCategory = (el)=>{
        
    }
  return (
    <div>
        <div className='flex items-center text-xl justify-center gap-3 m-5'>
            {categories.map((el)=>(
                <div key={el} onClick={()=>{return onCategory(el)}} className='h-9 w-20 text-center bg-blue-400'>{el}</div>
            ))}
        </div>
    </div>
  )
}

export default Categories