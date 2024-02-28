import "./App.css"
import React, { useState, useRef } from 'react';
import { Form } from './Pages/Form';

function App() {
    const [forms, setForms] = useState([]);
    const formRefs = useRef([]);

    const addNewForm = () => {
        const id = forms.length + 1;
        setForms([...forms, { id }]);
        formRefs.current[id] = React.createRef();
    };

    const handleFormDelete = (id) => {
        setForms(forms.filter((form) => form.id !== id));
        formRefs.current[id] = null;
    };

    const handleButtonClick = () => {
        formRefs.current.forEach((ref) => {
            if (ref && ref.current) {
                ref.current.submitForm();
            }
        });
    };

    return (
        <div className='App'>
            {forms.map((form) => (
                <Form key={form.id} ref={formRefs.current[form.id]} onDelete={() => handleFormDelete(form.id)} />
            ))}
            <button className="submit-button" onClick={addNewForm}>Add Form</button> <br />
            <button className="submit-all-button" onClick={handleButtonClick}>Submit Form</button>
        </div>
    );
}

export default App;