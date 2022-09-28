import { useState } from 'react';
import './App.css';
import pastaData from './data.json'
import InputType from './components/InputType';
import GroupType from './components/GroupType';
import SelectType from './components/SelectType';

function App() {
  // show/hide all advanced fields.
  const [showAllAdvancedFields, setShowAllAdvancedFields] = useState(false);
  const [formData, setFormData] = useState({});

  const updateData = (key, value) =>{
    formData[key] = value;
    setFormData(formData)
    console.log(formData)
  }
  const submit = () =>{
    console.log("formData", formData)
   
  }
  return (
    <div className="app">
        <div className='main-card'>
          <h3 className='main-card-title'>New Pizza</h3>
          <hr/>
        {
          pastaData.map(data=>{
            if(data.uiType === "Input"){
               return <InputType key={data.jsonKey} formData={formData} updateData={updateData} data={data}/>
            } else if(data.uiType === "Group"){
               return <GroupType key={data.jsonKey} formData={formData} updateData={updateData} showAllAdvancedFields = {showAllAdvancedFields} data={data}/>
            } else if(data.uiType === "Select"){
               return <SelectType key={data.jsonKey} formData={formData} updateData={updateData} data={data}/>
            }
          })
        }
        </div>
        <hr/>
      <footer className='flex'>
        <div className='content left'>
          Show advanced fields 
          <label className="switch">
            <input type="checkbox" onClick={()=>setShowAllAdvancedFields(!showAllAdvancedFields)}/>
            <span className="slider round"></span>
          </label>
        </div>
        <div className='content'>
          <button>Cancel</button>
          <button onClick={submit} className='submit'>Submit</button>
        </div>
      </footer>
    </div>
  );
}

export default App;