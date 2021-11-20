import Plot from 'react-plotly.js';

function Histogram({ values }) {
  return (
    <div className="histogram">
      <Plot
        data={[{ type: 'histogram', x: values }]}
        layout={{
          height: 120,
          margin: { t: 5, b: 20, r: 10, l: 20 },
          width: 300,
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
        }}
        config={{ autosizable: true, responsive: true }}
      />
    </div>
  );
}

export default Histogram;
