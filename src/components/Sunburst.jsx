import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Sunburst({ data }) {
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
    <div className="sunburst">
      <Plot
        data={[
          {
            type: 'sunburst',
            ...data,
          },
        ]}
        layout={{
          height: layout.height,
          width: layout.width,
          paper_bgcolor: 'transparent',
          margin: { l: 0, r: 0, b: 0, t: 0 },
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}

export default Sunburst;
