import { useState } from "react";
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Ganjil, Prima, Segitiga } from "./logic";
import { ShowResult } from "./pages";

function App() {
  const [input, setInput] = useState('');
  const [types, setTypes] = useState('');
  const [result, setResult] = useState();
  const [isShow, setIsShow] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (regex.test(inputValue) || inputValue === ''){
      setInput(inputValue);
    }
  }

  const TypeHandler = (type) => {
    setTypes(type);
    setIsShow(true);

    if(type === 'Generate Segitiga'){
      return Segitiga(input, setResult);
    } else if (type === 'Generate Bilangan Ganjil'){
      return Ganjil(input, setResult);
    } else if (type === 'Generate Bilangan Prima'){
      return Prima(input, setResult)
    }
  }

  return (
    <div className="text-center my-2">
      <h1>Test Technical Code</h1>
      <div className="d-flex flex-row justify-content-center">
        <Form className='bg-light border p-3'>

          {/* Form Input */}
          <h4 className="text-start">Form Input Angka</h4>
          <FloatingLabel controlId="inputAngka" label='Input Angka' className="mb-3">
            <Form.Control 
              type="text"
              placeHolder="Masukkan Angka"
              value={input}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </FloatingLabel>

          {/* Button */}
          <div className="d-flex flex-row justify-content-around my-3">
            <Button variant="secondary" onClick={()=>TypeHandler('Generate Segitiga')}>Generate Segitiga</Button>
            <Button variant="primary" onClick={()=>TypeHandler('Generate Bilangan Ganjil')} className='mx-3'>Generate Bilangan Ganjil</Button>
            <Button variant="success" onClick={()=>TypeHandler('Generate Bilangan Prima')}>Generate Bilangan Prima</Button>
          </div>

          {/* Hasil */}
          {isShow === false ? '' :
            <div>
              <h4 className="text-start">Hasil {types}</h4>
              <ShowResult result={JSON.parse(result)} />
            </div>
          }
        </Form>
      </div>
    </div>
  );
}

export default App;
