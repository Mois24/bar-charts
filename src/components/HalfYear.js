import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../data/data.json';

import './Month.css';

const HalfYear = () => {
  const halfYearValue = Object.values(data.finance.periods[0].graph.half_year);
  const values = Object.keys(data.finance.periods[0].graph.half_year);
  const halfYear = [];
  for (let i = 0; i < halfYearValue.length; i++) {
    let obj = {
      day: values[i],
      value: halfYearValue[i]
    };
  
    halfYear.push(obj);
  }

  return (
    <div>
      <BarChart
          width={800}
          height={300}
          data={halfYear}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip shared={false}/>
          <Bar dataKey='value' barSize={20} radius={[10,10,10,10]} fill='#0000FF' />
        </BarChart>
    </div>
  );
}

export default HalfYear;