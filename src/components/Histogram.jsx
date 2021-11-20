import Plot from 'react-plotly.js';

function Histogram({ values }) {
  return (
    <div className="histogram">
      <Plot
        data={[{ type: 'histogram', x: values }]}
        layout={{
          height: 120,
          margin: { t: 5, b: 20, r: 10, l: 25 },
          width: 300,
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
            zerolinewidth: 1,
          },
          font: { color: '#5F5F5F' },
        }}
        config={{ responsive: true }}
      />
    </div>
  );
}

export default Histogram;
