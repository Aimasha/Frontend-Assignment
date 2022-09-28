import React from 'react'

const SwitchType = ({data, updateData, formData}) => {
  return (
      <div className="container flex checkbox">
        <div className='content'>          
          <input
            type="checkbox"
            checked={formData[data.jsonKey]} 
            onChange={(e)=>{
              updateData(data.jsonKey, e.target.checked)
            }} 
          />
          <div className='title'>
              {data.label}
              {data.validate.required && <label className='required'>*</label>}
            </div>
        </div>
      </div>
  )
}

export default SwitchType