import React, { useState } from 'react';
import Button from './components/Button';
import Month from './components/Month';
import HalfYear from './components/HalfYear';
import Year from './components/Year';

import './App.css';

const App = () => {
  
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setValue(value);
  }

  const render = () => {
    if (value === 'За последний месяц') {
      return <Month/>;
    } else if (value === 'За последние 6 месяцев') {
      return <HalfYear />
    } else if (value === 'За последний год') {
      return <Year />
    } else {
      return <Month/>
    }
  }

  return (
    <div className="App">
      <h1>Bar Chart for Codify Software</h1>
      <Button onChange={handleChange}/>
      <div className='render'>
        {render()}
      </div>
    </div>
  );
}

export default App;
