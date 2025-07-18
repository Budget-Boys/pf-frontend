import style from "./statistics.module.sass";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const Statistics: React.FC = () => {
  return (
    <>
      <main>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: ['bar A', 'bar B', 'bar C'],
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          height={300}
        />
      </main>
    </>
  );
};

export default Statistics;
