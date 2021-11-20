import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function TreeMap() {
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
            labels: [
              'Eve',
              'Cain',
              'Seth',
              'Enos',
              'Noam',
              'Abel',
              'Awan',
              'Enoch',
              'Azura',
            ],
            parents: [
              '',
              'Eve',
              'Eve',
              'Seth',
              'Seth',
              'Eve',
              'Eve',
              'Awan',
              'Eve',
            ],
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
