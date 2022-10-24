import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Conversor from './componets/Conversor';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  

  return (
    <>
      <Conversor />
    </>
  )
};

root.render(<App/>);
