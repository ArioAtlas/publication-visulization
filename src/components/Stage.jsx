import ParallelCategories from './ParallelCategories';
import Sunburst from './Sunburst';
import TreeMap from './TreeMap';

function Stage({ service, filter }) {
  const dimensions = service.getDimensions(['year', 'department', 'faculty']);

  return (
    <div className="stage">
      <div className="presentation">
        <TreeMap />
      </div>
      <div className="toolbar">
        <ParallelCategories dimensions={dimensions} />
        <Sunburst />
      </div>
    </div>
  );
}

export default Stage;
