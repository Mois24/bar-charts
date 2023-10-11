import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../data/data.json';

import './Month.css';

const Month = () => {
  const daysValue = Object.values(data.finance.periods[0].graph.month);
  const values = Object.keys(data.finance.periods[0].graph.month);
  const newMonth = [];
  for (let i = 0; i < daysValue.length; i++) {
    let obj = {
      day: values[i],
      value: daysValue[i]
    };
  
    newMonth.push(obj);
  }

  return (
    <div>
      <BarChart
          width={800}
          height={300}
          data={newMonth}
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
          <Bar dataKey='value' barSize={20} radius={[10,10,10,10]} fill='#0000FF'/>
        </BarChart>
    </div>
  );
}

export default Month;