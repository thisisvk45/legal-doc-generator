import React, { useState, createContext, useRef } from 'react';
import Form from './components/form';
import Preview from './components/Preview';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import './styles.css';
import './app.css';
import './index.css';

export const inputContext = createContext();

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

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const previewRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

const downloadPDF = () => {
  const input = previewRef.current;
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('petition_preview.pdf');
  });
};


  const downloadWord = () => {
    const content = previewRef.current.innerText;
    const blob = new Blob([content], { type: 'application/msword' });
    saveAs(blob, 'petition_preview.doc');
  };

  return (
    <inputContext.Provider value={{ formData, setFormData }}>
      <div className="container">
        <div className="buttons-container">
          <button className="preview-toggle-btn" onClick={togglePreviewMode}>
            {isPreviewMode ? "Edit" : "Preview"}
          </button>
          {isPreviewMode && (
            <>
              <button className="download-btn" onClick={downloadPDF}>
                Download as PDF
              </button>
              <button className="download-btn" onClick={downloadWord}>
                Download as Word
              </button>
            </>
          )}
        </div>

        {isPreviewMode ? (
          <div className="preview-only" ref={previewRef}>
            <Preview formData={formData} />
          </div>
        ) : (
          <>
            <div className="form-container">
              <Form formData={formData} handleChange={handleChange} />
            </div>
            <div className="preview-container">
              <Preview formData={formData} />
            </div>
          </>
        )}
      </div>
    </inputContext.Provider>
  );
};

export default App;
