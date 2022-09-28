import React, { useState } from 'react';
import SelectType from './SelectType'
import SwitchType from './SwitchType'
import RadioType from './RadioType'

const GroupType = ({data, showAllAdvancedFields, formData, updateData}) => {
  // show/hide advanced fields
  const [showFields, setShowFields] = useState(false);
  // getting nested keys to combine with upper level key. ex: pizza/type
  const lowerLevelUpdateData = (key, value) => {
    updateData(data.jsonKey + "/" + key, value)
  }
  return (
      <div className="container">
          <div className='title'>
            {data.label}
            {
              data.validate.required && <label className='required'>*</label>
            }
            <span className='info' title={data.description}>i</span>
          </div>
          <hr/>
          {
            data.subParameters.map(item=>{
              if(item.uiType === "Select" && (item.validate.required || showFields || showAllAdvancedFields)){
                return <SelectType key={item.jsonKey} formData={formData} updateData={lowerLevelUpdateData} data={item}/>
              }else if(item.uiType === "Switch"){
                return <SwitchType key={item.jsonKey} formData={formData} updateData={lowerLevelUpdateData} data={item}/>
              }else if(item.uiType === "Radio"){
                return <RadioType key={item.jsonKey} formData={formData} updateData={lowerLevelUpdateData} data={item}/>
              }
            })
          }
         
      </div>
  )
}

export default GroupType