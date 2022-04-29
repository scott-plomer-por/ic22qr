import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import "./styles/styles.css";

const App = (props) => {
  //const [data, setData] = useState('No result');
  const [instructions, setInstructions] = useState('Please Scan QR Code');
  const [success, setSuccess] = useState(false);

  return (
    <div className =  { `container ${success ? "success" : ""}` }>
      <h2 className='heading'>{instructions}</h2>
      {/* <p>Email : {data}</p> */}
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            //setData(result?.text);
            setInstructions('Success!');
            setSuccess(true);
            const requestOptions = {
              method: 'GET',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            };
            
            fetch(`https://hooks.zapier.com/hooks/catch/895175/bzv9wnn/silent/?email=${result}`, requestOptions);
          }

          if (!!error) {
              setInstructions('Please Scan QR Code');
              setSuccess(false);
          }
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
};
export default App;
