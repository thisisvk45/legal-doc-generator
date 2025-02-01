import React, { useState,createContext } from 'react';
import Form from './components/form';
import Preview from './components/Preview';
import './styles.css';
import './app.css';

export const inputContext=createContext();

const App = () => {
  const [formData, setFormData] = useState({
    crmNumber: '',
    year: '',
    petitionerName: '',
    respondentName: '',
    fathersName: '',
    age: '',
    houseAddress: '',
    mobileNumber: '',
    aadhaarNumber: '',
    state: '',
    lawyerName: '',
    dated: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <inputContext.Provider value={{formData,setFormData}}>
    <div className="container">
      <div className="form-container">
        <Form formData={formData} handleChange={handleChange} />
      </div>
      <div className="preview-container">
        <Preview formData={formData} />
      </div>
    </div>
    </inputContext.Provider>

    
  );
  
};

export default App;
