import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function ParallelCategories({ dimensions }) {
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
            dimensions,
            // line: {color: [color],
            //   colorscale: [[0, 'lightsteelblue'], [1, 'mediumseagreen']]},
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
