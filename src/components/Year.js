import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../data/data.json';

import './Month.css';

const Year = () => {
  const yearValue = Object.values(data.finance.periods[0].graph.year);
  const values = Object.keys(data.finance.periods[0].graph.year);
  const year = [];
  for (let i = 0; i < yearValue.length; i++) {
    let obj = {
      day: values[i],
      value: yearValue[i]
    };
  
    year.push(obj);
  }

  return (
    <div>
      <BarChart
          width={800}
          height={300}
          data={year}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip shared={false} />
          <Bar dataKey='value' barSize={20} radius={[10,10,10,10]} fill='#0000FF' />
        </BarChart>
    </div>
  );
}

export default Year;