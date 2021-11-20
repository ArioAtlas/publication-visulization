import { useRef, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Sunburst() {
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
            ids: [
              'North America',
              'Europe',
              'Australia',
              'North America - Football',
              'Soccer',
              'North America - Rugby',
              'Europe - Football',
              'Rugby',
              'Europe - American Football',
              'Australia - Football',
              'Association',
              'Australian Rules',
              'Autstralia - American Football',
              'Australia - Rugby',
              'Rugby League',
              'Rugby Union',
            ],
            labels: [
              'North<br>America',
              'Europe',
              'Australia',
              'Football',
              'Soccer',
              'Rugby',
              'Football',
              'Rugby',
              'American<br>Football',
              'Football',
              'Association',
              'Australian<br>Rules',
              'American<br>Football',
              'Rugby',
              'Rugby<br>League',
              'Rugby<br>Union',
            ],
            parents: [
              '',
              '',
              '',
              'North America',
              'North America',
              'North America',
              'Europe',
              'Europe',
              'Europe',
              'Australia',
              'Australia - Football',
              'Australia - Football',
              'Australia - Football',
              'Australia - Football',
              'Australia - Rugby',
              'Australia - Rugby',
            ],
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
