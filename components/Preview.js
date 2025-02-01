import React, { useContext } from 'react';
import { StaticPetitionData1, StaticPetitionData2, StaticPetitionData3 } from './StaticPetitionData';
import { useState } from "react";
import { inputContext } from '../App';
import jsPDF from "jspdf";


const Preview = ({ formData }) => {
  // const {formData,setFormData}=useContext()
  const [particulars,setParticulars]=useState("");
  const [counter,setCounter]=useState(1);
  const [dated,setDated]=useState("");
  const [pages,setPages]=useState("");
  const [courtfee,setCourtFee]=useState("");
  const [tabledata,setTableData]=useState([]);
  const addRow = () => {
    // Add a new row to the table
    setTableData((prevData) => [
      ...prevData,
      {
        counter,
        particulars,
        dated,
        pages,
        courtfee,
      },
    ]);
    setParticulars("");
    setDated("");
    setPages("");
    setCourtFee("");
    setCounter(counter+1);

  };

  return (
    <div className="preview-container">
         <h4 className="header">
          IN THE HIGH COURT FOR THE STATES OF PUNJAB AND HARYANA AT CHANDIGARH
        </h4>
      {/* Header Section */}
      <div style={{ position: "relative" }}>
      <p className="highlight" style={{ fontWeight: "bold" }}>
    	CRM-M-: {formData.crmNumber} of {formData.year}
      </p>
     </div>


      <p>{formData.petitionerName}</p>
      <div style={{ position: "relative" }}>
      <p style={{ position: "absolute", right: "5%" }}>....... Petitioner</p>
      </div>

      <p className="versus">Versus</p>

      <p>{formData.respondentName}</p>
      <div style={{ position: "relative", minHeight: "20px" }}>
      <p style={{ position: "absolute", right: "5%" }}>....... Respondent</p>
      </div>
      <h5 className="index-header">I N D E X</h5>


      {/* Table Section */}
      <input 
        type="text" 
        placeholder="particulars" 
        onChange={(e)=>setParticulars(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="dated" 
        onChange={(e)=>setDated(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="pages" 
        onChange={(e)=>setPages(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="court fee" 
        onChange={(e)=>setCourtFee(e.target.value)}
      />
      <button onClick={addRow}>submit</button>
      <table className="preview-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Particulars</th>
            <th>Dated</th>
            <th>Pages</th>
            <th>Court Fee</th>
          </tr>
        </thead>
        <tbody>
          {
            tabledata.map((item)=>(
              <tr>
                <td>{item.counter}</td>
                <td>{item.particulars}</td>
                <td>{item.dated}</td>
                <td>{item.pages}</td>
                <td>{item.courtfee}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        {/*notes section*/}
  <p className="note">
    Note 1: Connected/Similar Case, if any: <strong>Nil</strong>
  </p>
  <p className="note">
    Note 2: Whether any sitting/former M.P./MLA is involved in this case: <strong>Nil</strong>
  </p>
</div>
{/* Lawyer's Details Section */}
<div className="lawyer-details">
        <p>{formData.lawyerName || "(LAWYER'S NAME)"}</p>
        <p>{formData.phoneNumber || "(PH-No)"}</p>
        <p>{formData.norNumber || "(NOR – No)"}</p>
        <p>ADVOCATE</p>
        <p>
          Dated: {formData.dated || "( )"} &nbsp;&nbsp; COUNSEL FOR THE PETITIONER
        </p>
        <p>Settled By Myself</p>
      </div>



      <h4 className="header">
          IN THE HIGH COURT FOR THE STATES OF PUNJAB AND HARYANA AT CHANDIGARH
        </h4>
      {/* Header Section */}
      <div style={{ position: "relative" }}>
  <p
    className="highlight"
    style={{
      position: "absolute",
      right: "0",
      margin: "0", // Ensures no unexpected offset
    }}
  >
    CRM-M: {formData.crmNumber} of {formData.year}
  </p>
</div>

      <p>{formData.petitionerName}</p>
      <div style={{ position: "relative" }}>
      <p style={{ position: "absolute", right: "5%" }}>....... Petitioner</p>
      </div>

      <p className="versus">Versus</p>

          <div style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          right: "5%",
          margin: "0", // Ensures proper positioning
        }}
      >
        {formData.respondentName}
      </p>
      <p
        style={{
          position: "absolute",
          right: "5%",
          top: "20px", // Adjust vertical spacing as needed
          margin: "0",
            }}
          >
          ....... Respondent
          </p>
          </div>


            <h5
            className="subheader"
            style={{
              textAlign: "center",
            }}
          >
            MEMO OF COURT FEE
          </h5>

{/* Lawyer's Details Section */}
<div className="lawyer-details">
        <p>{formData.lawyerName || "(LAWYER'S NAME)"}</p>
        <p>ADVOCATE</p>
        <p>
          Dated: {formData.dated || "( )"} &nbsp;&nbsp; COUNSEL FOR THE PETITIONER
        </p>
      </div>
      <h4 className="header">
          IN THE HIGH COURT FOR THE STATES OF PUNJAB AND HARYANA AT CHANDIGARH
        </h4>
         <div style={{ position: "relative" }}>
  <p
    className="highlight"
    style={{
      position: "absolute",
      right: "0",
      margin: "0", // Ensures no unexpected offset
    }}
  >
    CRM-M: {formData.crmNumber} of {formData.year}
  </p>
</div>


      <p>
        {formData.petitionerName}, son of {formData.fathersName}, aged{" "}
        {formData.age} years, resident of {formData.houseAddress}.
      </p>
      <p>Mobile No: {formData.mobileNumber}</p>
      <p>Aadhaar Card No: {formData.aadhaarNumber}</p>
      <div style={{ position: "relative" }}>
      <p style={{ position: "absolute", right: "5%" }}>....... Petitioner</p>
      </div>
      <p className="versus">Versus</p>

                <div style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          right: "5%",
          margin: "0", // Ensures proper positioning
        }}
      >
        {formData.respondentName}
      </p>
      <p
        style={{
          position: "absolute",
          right: "5%",
          top: "20px", // Adjust vertical spacing as needed
          margin: "0",
            }}
          >
          ....... Respondent
          </p>
          </div>

      <p className="note">
     <strong>Note: - Petitioner has not been declared as Proclaimed Person 
    either in this case or in any other case.</strong>
  </p>
  <div className="lawyer-details">
        <p>{formData.lawyerName || "(LAWYER'S NAME)"}</p>
        <p>ADVOCATE</p>
        <p>
          Dated: {formData.dated || "( )"} &nbsp;&nbsp; COUNSEL FOR THE PETITIONER
        </p>
      </div>
      <p>
        <strong>State:</strong> {formData.state}
      </p>
      <p>
        <strong>Dated:</strong> {formData.dated}
      </p>
      <hr />

      {/* Static Content Section */}
      <StaticPetitionData1 />
      <div className="lawyer-details">
    <p>{formData.lawyerName || "(LAWYER'S NAME)"}</p>
   <p>ADVOCATE</p>
  <p>
    Dated: {formData.dated || "( )"} &nbsp;&nbsp; COUNSEL FOR THE PETITIONER
  </p>
</div>

        <h4 className="header">
          IN THE HIGH COURT FOR THE STATES OF PUNJAB AND HARYANA AT CHANDIGARH
        </h4>
      {/* Header Section */}
       <div style={{ position: "relative" }}>
  <p
    className="highlight"
    style={{
      position: "absolute",
      right: "0",
      margin: "0", // Ensures no unexpected offset
    }}
  >
    CRM-M: {formData.crmNumber} of {formData.year}
  </p>
</div>

      <p>{formData.petitionerName}</p>
      <div style={{ position: "relative" }}>
      <p style={{ position: "absolute", right: "5%" }}>....... Petitioner</p>
      </div>

      <p className="versus">Versus</p>

                <div style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          right: "5%",
          margin: "0", // Ensures proper positioning
        }}
      >
        {formData.respondentName}
      </p>
      <p
        style={{
          position: "absolute",
          right: "5%",
          top: "20px", // Adjust vertical spacing as needed
          margin: "0",
            }}
          >
          ....... Respondent
          </p>
          </div>

      <p>
        {formData.petitionerName}, son of {formData.fathersName}, aged{" "}
        {formData.age} years, resident of {formData.houseAddress}.
      </p>
      <p>Mobile No: {formData.mobileNumber}</p>
      <p>Aadhaar Card No: {formData.aadhaarNumber}</p>
      <StaticPetitionData2 />

      <p>
        <strong>State:</strong> {formData.state}
      </p>
      <p>
        <strong>Dated:</strong> {formData.dated}
      </p>
      <StaticPetitionData3 />
      <p>
        <strong>State:</strong> {formData.state}
      </p>
      <p>
        <strong>Dated:</strong> {formData.dated}
      </p>

    </div>
    
    
    
  );
};

export default Preview;
