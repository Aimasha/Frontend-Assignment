import React, { useState } from 'react';

const RadioType = ({data, updateData}) => {
  // current selection
  const [selected, setSelected] = useState(null);
  // updating the main app state data
  const update = (value) =>{
    setSelected(value);
    updateData(data.jsonKey, value)
  }
  return (
      <div className="container flex">
        {data.validate.options.map(({value, label})=>{
          // selected style
          const cl = selected === value ? "radio-tab selected" : "radio-tab";
            return <div key={value} onClick={()=>update(value)} className={cl}>{label}</div>
          })}
      </div>
  )
}

export default RadioType