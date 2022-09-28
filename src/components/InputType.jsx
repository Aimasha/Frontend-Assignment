import React from 'react'

const InputType = ({data, updateData}) => {
  return (
      <div className="container flex">
        <div className='content'>
          <div className='title'>
            {data.label}
            {
              data.validate.required && <label className='required'>*</label>
            }
            <span className='info' title={data.description}>i</span>
          </div>
        </div>
        <div className='content'>
          <input onChange={(e)=>updateData(data.jsonKey, e.target.value)} type="text" placeholder={data.placeholder} />
        </div>
      </div>
  )
}

export default InputType