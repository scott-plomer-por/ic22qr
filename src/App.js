import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const App = (props) => {
  const [data, setData] = useState('No result');



  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            const requestOptions = {
              method: 'GET',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            };
            
            fetch(`https://hooks.zapier.com/hooks/catch/895175/bzv9wnn/silent/?email=${result}`, requestOptions);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};
export default App;
