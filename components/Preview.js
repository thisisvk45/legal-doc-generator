import React, { useContext } from 'react';
import { StaticPetitionData1, StaticPetitionData2, StaticPetitionData3 } from './StaticPetitionData';
import { useState } from "react";
import { inputContext } from '../App';
import jsPDF from "jspdf";


const Preview = ({ formData }) => {
  // const {formData,setFormData}=useContext()
  const [particulars, setParticulars] = useState("");
  const [counter, setCounter] = useState(1);
  const [dated, setDated] = useState("");
  const [pages, setPages] = useState("");
  const [courtfee, setCourtFee] = useState("");
  const [tabledata, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited
  const [saved, setSaved] = useState(false);  // New state to track if the table is saved


  const addOrUpdateRow = () => {
    if (editIndex !== null) {
      // Update existing row
      const updatedData = [...tabledata];
      updatedData[editIndex] = {
        counter: tabledata[editIndex].counter, // Keep the original counter
        particulars,
        dated,
        pages,
        courtfee,
      };
      setTableData(updatedData);
      setEditIndex(null); // Reset the edit index
    } else {
      // Add a new row
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
      setCounter(counter + 1); // Increment the counter for the next row
    }

    // Clear input fields
    setParticulars("");
    setDated("");
    setPages("");
    setCourtFee("");
  };
  const handleSave = () => {
    setSaved(true); // Mark the table as saved
  };

  const handleEdit = (index) => {
    const row = tabledata[index];
    setParticulars(row.particulars);
    setDated(row.dated);
    setPages(row.pages);
    setCourtFee(row.courtfee);
    setEditIndex(index); // Set the row index being edited
  };

  const handleDelete = (index) => {
    const updatedData = tabledata.filter((_, i) => i !== index);
    setTableData(updatedData);
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
      {/* Input Fields - Only show if not saved */}
	{!saved && (
	  <>
	    <input 
	      type="text" 
	      placeholder="particulars" 
	      value={particulars}
	      onChange={(e) => setParticulars(e.target.value)} 
	    />
	    <input 
	      type="date" 
	      placeholder="dated" 
	      value={dated || new Date().toISOString().split('T')[0]} 
	      onChange={(e) => setDated(e.target.value)}
	    />
	    <input 
	      type="text" 
	      placeholder="pages" 
	      value={pages}
	      onChange={(e) => setPages(e.target.value)}
	    />
	    <input 
	      type="text" 
	      placeholder="court fee" 
	      value={courtfee}
	      onChange={(e) => setCourtFee(e.target.value)}
	    />
	    <button onClick={addOrUpdateRow}>
	      {editIndex !== null ? "Update Row" : "Submit"}
	    </button>
	  </>
	)}

      <table className="preview-table">
        <thead>
	  <tr>
	    <th>S. No.</th>
	    <th>Particulars</th>
	    <th>Dated</th>
	    <th>Pages</th>
	    <th>Court Fee</th>
	    {/* Conditionally render the Actions column based on the 'saved' state */}
	    {!saved && <th>Actions</th>} {/* This column will now only be visible if 'saved' is false */}
	  </tr>
	</thead>
        <tbody>
	  {tabledata.map((item, index) => (
	    <tr key={index}>
	      <td>{item.counter}</td>
	      <td>{item.particulars}</td>
	      <td>{item.dated}</td>
	      <td>{item.pages}</td>
	      <td>{item.courtfee}</td>
	      {/* Conditionally render the action buttons (Edit/Delete) if 'saved' is false */}
	      {!saved && (
		<td>
		  <button onClick={() => handleEdit(index)}>Edit</button>
		  <button onClick={() => handleDelete(index)}>Delete</button>
		</td>
	      )}
	    </tr>
	  ))}
	</tbody>

      </table>
      
      {!saved && (
        <button onClick={handleSave}>Save Table</button>
      )}

      <div>
        {/* Notes Section */}
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
