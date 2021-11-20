import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function ParallelCategories() {
  const parent = useRef(null);
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setLayout({
      width: parent?.current?.clientWidth ?? 0,
      height: parent?.current?.clientHeight ?? 0,
    });
  }, [parent]);
  return (
    <div className="parallelCategories" ref={parent}>
      <Plot
        data={[
          {
            type: 'parcats',
            dimensions: [
              {
                label: 'Hair',
                values: ['Black', 'Brown', 'Brown', 'Brown', 'Red'],
              },
              {
                label: 'Eye',
                values: ['Brown', 'Brown', 'Brown', 'Blue', 'Blue'],
              },
              {
                label: 'Sex',
                values: ['Female', 'Male', 'Female', 'Male', 'Male'],
              },
            ],
            counts: [6, 10, 40, 23, 7],
          },
        ]}
        layout={{
          height: layout.height,
          width: layout.width,
          paper_bgcolor: 'transparent',
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}

export default ParallelCategories;
