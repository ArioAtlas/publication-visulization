import Plot from 'react-plotly.js';

function Histogram({ values, width, title }) {
  return (
    <div className="histogram">
      <Plot
        data={[
          {
            type: 'histogram',
            x: values,
            autobinx: false,
          },
        ]}
        layout={{
          height: 120,
          margin: { t: 15, b: 12, r: 0, l: 20 },
          width,

          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
          yaxis: {
            gridcolor: 'rgba(0,0,0,0.1)',
            gridwidth: 1,
            zerolinecolor: 'rgba(0,0,0,0.25)',
            zerolinewidth: 1,
          },
          xaxis: {
            gridcolor: 'rgba(0,0,0,0.1)',
            gridwidth: 1,
            zerolinecolor: 'rgba(0,0,0,0.25)',
            ticktext: Array.from(new Set(values)).map((i) =>
              i.replace(/Faculty of /, '').replace(/Dept. of /, '')
            ),
            tickvals: Array.from(new Set(values)),
          },
          font: { color: '#5F5F5F', size: 8 },
          title,
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}

export default Histogram;
