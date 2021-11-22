import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function TreeMap({ data }) {
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
    <div className="treeMap" ref={parent}>
      <Plot
        data={[
          {
            type: 'treemap',
            ...data,
            textinfo: 'label+value+percent  entry',
            branchvalues: 'total',
            marker: {
              line: {
                width: 1,
                color: 'black',
              },
              colors: [
                '#8dd3c7',
                '#ffed6f',
                '#b3de69',
                '#bebada',
                '#fb8072',
                '#80b1d3',
                '#fccde5',
                '#d9d9d9',
                '#ccebc5',
                '#fdb462',
                '#ffffb3',
              ],
            },
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

export default TreeMap;
