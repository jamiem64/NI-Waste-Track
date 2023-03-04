import { CForm, CFormTextarea, CButton } from "@coreui/react";
import { useEffect, useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const TextInputForm = (props) => {
  const [userInputText, setUserInputText] = useState("");

  const handleChange = (e) => {
    setUserInputText(e.target.value); // update the state variable when text area value changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInputText === "") {
      console.log("### NO TEXT INPUT ###");
    } else {
      // code here to handle the text input value
      console.log("userInputText:" + userInputText);
    }
  };

    return (
        <div>
            <CForm className='Main-Form-Width'>
                <CFormTextarea className='Main-Text-Entry-Box'
                    id="user-input-text"
                    text="Must be 8-20 words long."
                    placeholder="Enter text here..."
                    onChange={handleChange}
                ></CFormTextarea>
                <div className="d-grid gap-2 col-6 mx-auto Main-Submit-Button-Frame">
                    <CButton className='Main-Submit-Button' onClick={handleSubmit}>Submit</CButton>
                </div>
            </CForm>

        </div>
    )
}
export default TextInputForm;

