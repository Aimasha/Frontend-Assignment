import React from 'react'

const SelectType = ({data, formData, updateData}) => {
  return (
      <div className="container flex">
        <div className='content'>
          <div className='title'>
            {data.label}
            {data.validate.required && <label className='required'>*</label>}
          </div>
        </div>
        <div className='content'>
        <select onChange={e=>updateData(data.jsonKey, e.target.value)} >
          {
            data.validate.options.map(({value, label})=>{
              // selected is true if mainState has current jsonKey value or defaultvalue from the mock data
              return (
              <option 
                key={value} 
                selected={(formData[data.jsonKey] || data.validate.defaultValue) === value} 
                value={value}>{label}
              </option>
              )
            })
          }
        </select>
        </div>
      </div>
  )
}

export default SelectType